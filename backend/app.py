"""
Minimal Flask backend for the portfolio.

The site is fully static (all content lives in data.js on the frontend),
so this backend only exists for things a static site can't do safely:
  - a contact form endpoint that emails you without exposing credentials
    in the browser
  - a future TryHackMe stats endpoint: THM has no public API, so if you
    want to automate your profile stats, run a scheduled scraper HERE
    (server-side) and expose only the processed JSON below — never put
    THM credentials or session tokens in the React app.

Setup:
    cp .env.example .env      # fill in your real SMTP credentials
    pip install -r requirements.txt
    python app.py
"""
import os
import smtplib
from email.message import EmailMessage

from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_cors import CORS

load_dotenv()  # reads .env into os.environ — .env itself is never committed

app = Flask(__name__)
CORS(app)  # tighten to your real domain in production

TRYHACKME_CACHE = {
    "username": "Cnidari",
    "rank": "Adept · 1328 puntos",
    "profileUrl": "https://tryhackme.com/p/Cnidari",
    "rooms": [
        {"name": "Pickle Rick", "type": "webapp", "status": "completada"},
        {"name": "Letter", "type": "OSINT", "status": "completada"},
        {"name": "Water Bottle", "type": "OSINT", "status": "completada"},
        {"name": "Overheard at Breakfast", "type": "OSINT", "status": "completada"},
        {"name": "The Game", "type": "Game hacking", "status": "completada"},
        {"name": "Carnage", "type": "Blue team", "status": "completada"},
    ],
}

# SMTP settings come from environment variables (see .env.example).
# Never hardcode credentials here — this file is committed to git.
SMTP_HOST = os.environ.get("SMTP_HOST")
SMTP_PORT = int(os.environ.get("SMTP_PORT", "587"))
SMTP_USER = os.environ.get("SMTP_USER")
SMTP_PASS = os.environ.get("SMTP_PASS")
CONTACT_TO = os.environ.get("CONTACT_TO", SMTP_USER)


@app.get("/api/tryhackme")
def tryhackme_stats():
    return jsonify(TRYHACKME_CACHE)


@app.post("/api/contact")
def contact():
    data = request.get_json(silent=True) or {}
    name = (data.get("name") or "").strip()
    email = (data.get("email") or "").strip()
    message = (data.get("message") or "").strip()

    if not name or not email or not message:
        return jsonify({"error": "Missing fields"}), 400

    if not SMTP_HOST or not SMTP_USER or not SMTP_PASS:
        app.logger.error(
            "SMTP is not configured — set SMTP_HOST/SMTP_USER/SMTP_PASS in .env"
        )
        return jsonify({"error": "Email is not configured on the server"}), 500

    msg = EmailMessage()
    msg["Subject"] = f"Portfolio contact from {name}"
    msg["From"] = SMTP_USER
    msg["To"] = CONTACT_TO
    msg["Reply-To"] = email  # hit "reply" and you answer the visitor directly
    msg.set_content(f"From: {name} <{email}>\n\n{message}")

    try:
        with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_USER, SMTP_PASS)
            server.send_message(msg)
    except Exception as exc:  # noqa: BLE001 — any SMTP failure should be a clean 502
        app.logger.error("Failed to send contact email: %s", exc)
        return jsonify({"error": "Could not send the message, try again later"}), 502

    return jsonify({"ok": True})


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)