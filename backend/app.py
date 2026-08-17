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

Run:
    pip install -r requirements.txt
    python app.py
"""
import os
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # tighten to your real domain in production

TRYHACKME_CACHE = {
    "username": "tu-usuario-thm",
    "rank": "Rango / puntos — pendiente",
    "profileUrl": "https://tryhackme.com/p/tu-usuario-thm",
    "rooms": [
        {"name": "Nombre de la room #1", "status": "completada"},
        {"name": "Nombre de la room #2", "status": "completada"},
        {"name": "Nombre de la room #3", "status": "en progreso"},
    ],
}


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

    # TODO: send via an email provider (SMTP / SendGrid / etc).
    # Keep the provider API key in an environment variable, never in code:
    #   api_key = os.environ["EMAIL_API_KEY"]
    print(f"[contact] {name} <{email}>: {message}")

    return jsonify({"ok": True})


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)