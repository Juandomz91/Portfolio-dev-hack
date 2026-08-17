import { useState } from 'react';
import { CONTENT } from './data.js';
import HexBackground from './components/HexBackground.jsx';
import ParticleBackground from './components/ParticleBackground.jsx';

const paperBg = '#f4f1e9', inkText = '#161412', mutedInk = '#4a453e';
const navyBg = '#0a0e17', violetAccent = '#a86bff', nightText = '#dfe3ea', nightMuted = '#7a8496';
const devAccent = '#3d6fb8';

export default function App() {
  const [mode, setMode] = useState('dev');
  const [lang, setLang] = useState('es');
  const t = CONTENT[lang];
  const isDev = mode === 'dev';

  const styles = {
    page: { background: isDev ? paperBg : navyBg, minHeight: '100vh', transition: 'background 0.3s' },
    nav: {
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '28px 56px',
      borderBottom: isDev ? '1px solid rgba(22,20,18,0.15)' : '1px solid rgba(255,255,255,0.1)'
    },
    logo: {
      fontFamily: isDev ? "'Source Serif 4',serif" : "'JetBrains Mono',monospace",
      fontSize: 22, fontWeight: 700,
      color: isDev ? devAccent : violetAccent
    },
    switchTrack: {
      display: 'flex', borderRadius: 20, overflow: 'hidden',
      border: `1px solid ${isDev ? 'rgba(0,0,0,0.25)' : 'rgba(255,255,255,0.2)'}`
    },
    btnBase: {
      fontFamily: "'JetBrains Mono',monospace", fontSize: 12, fontWeight: 700,
      padding: '8px 16px', border: 'none', cursor: 'pointer', letterSpacing: '0.05em'
    },
    footer: {
      display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '28px 56px',
      borderTop: isDev ? '1px solid rgba(22,20,18,0.15)' : '1px solid rgba(255,255,255,0.1)'
    },
    muted: { color: isDev ? '#6b665c' : nightMuted, fontFamily: "'JetBrains Mono',monospace", fontSize: 11 },
    accentLink: { color: isDev ? devAccent : violetAccent, fontFamily: "'JetBrains Mono',monospace", fontSize: 13, fontWeight: 600 }
  };

  const devBtnStyle = { ...styles.btnBase, background: isDev ? devAccent : 'transparent', color: isDev ? '#0c0d10' : '#8b93a0' };
  const hackBtnStyle = { ...styles.btnBase, background: !isDev ? violetAccent : 'transparent', color: !isDev ? '#0c0d10' : '#555' };
  const langBtn = (l) => ({
    background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit',
    color: lang === l ? (isDev ? '#161412' : '#fff') : 'inherit',
    fontWeight: lang === l ? 700 : 400
  });

  return (
    <div style={styles.page}>
      <nav style={styles.nav}>
        <div style={styles.logo}>{t.name}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
          <div style={styles.switchTrack}>
            <button style={devBtnStyle} onClick={() => setMode('dev')}>DEV</button>
            <button style={hackBtnStyle} onClick={() => setMode('hack')}>HACK</button>
          </div>
         <div style={{ display: 'flex', gap: 8, fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: isDev ? '#6b665c' : nightMuted }}>
            <button style={langBtn('es')} onClick={() => setLang('es')}>ES</button>
            <span>/</span>
            <button style={langBtn('ca')} onClick={() => setLang('ca')}>CA</button>
            <span>/</span>
            <button style={langBtn('fr')} onClick={() => setLang('fr')}>FR</button>
            <span>/</span>
            <button style={langBtn('en')} onClick={() => setLang('en')}>EN</button>
          </div>
        </div>
      </nav>

      {isDev ? <DevSection t={t.dev} /> : <HackSection t={t.hack} />}

      <footer style={styles.footer}>
        <span style={styles.muted}>&copy; 2026 {t.name}</span>
        <div style={{ display: 'flex', gap: 20 }}>
          <a href="mailto:joandomz91@proton.me" style={styles.accentLink}>{t.email}</a>
          <a href="https://es.linkedin.com/in/joandomzfdez" style={styles.accentLink}>LinkedIn</a>
          <a href="https://github.com/Juandomz91" style={styles.accentLink}>GitHub</a>
        </div>
      </footer>
    </div>
  );
}

function DevSection({ t }) {
  const panel = {
    background: 'rgba(244,241,233,0.55)', backdropFilter: 'blur(8px)',
    border: '1px solid rgba(22,20,18,0.1)', borderRadius: 8
  };
  const chip = { border: '1px solid rgba(22,20,18,0.3)', borderRadius: 4, color: mutedInk, fontFamily: "'JetBrains Mono',monospace", fontSize: 11, padding: '4px 10px' };
  const label = { fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6b665c', marginBottom: 20 };

  return (
    <div style={{ position: 'relative' }}>
      <HexBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 40, padding: '56px 56px 20px', alignItems: 'end' }}>
          <div style={{ ...panel, padding: 32 }}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, letterSpacing: '0.15em', textTransform: 'uppercase', color: devAccent, marginBottom: 18 }}>{t.kicker}</div>
            <h1 style={{ fontFamily: "'Source Serif 4',serif", fontSize: 88, lineHeight: 0.98, fontWeight: 600, margin: '0 0 24px', color: inkText }}>{t.headline}</h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 480, margin: 0, color: mutedInk }}>{t.sub}</p>
          </div>
          <div style={{ width: '100%', height: 340, background: '#e4e0d5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9a9384', fontFamily: "'JetBrains Mono',monospace", fontSize: 13 }}>
            portrait / workspace photo
          </div>
        </div>

        <div style={{ padding: '64px 56px 12px' }}>
          <div style={label}>{t.projectsLabel}</div>
          {t.projects.map((p) => (
            <div key={p.title} style={{ ...panel, display: 'grid', gridTemplateColumns: '100px 1fr 260px', gap: 32, alignItems: 'center', padding: 32, marginBottom: 24 }}>
              <div style={{ fontFamily: "'Source Serif 4',serif", fontSize: 52, fontWeight: 600, color: devAccent, opacity: 0.4 }}>{p.tag}</div>
              <div>
                <h3 style={{ fontFamily: "'Source Serif 4',serif", fontSize: 30, fontWeight: 600, margin: '0 0 10px', color: inkText }}>{p.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.55, color: mutedInk, margin: '0 0 14px', maxWidth: 440 }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 14 }}>
                  {p.stack.map((s) => <span key={s} style={chip}>{s}</span>)}
                </div>
                <a href={p.link} style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, fontWeight: 600, color: devAccent }}>{p.linkLabel} &rarr;</a>
              </div>
              {p.imgSrc
                ? <img src={p.imgSrc} alt={p.imgAlt} style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: 4 }} />
                : <div style={{ width: '100%', height: 160, background: '#e4e0d5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9a9384', fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textAlign: 'center', padding: 8 }}>{p.imgAlt}</div>}
            </div>
          ))}
        </div>

        <div style={{ padding: '0 56px 56px' }}>
          <div style={{ ...panel, padding: '28px 32px' }}>
            <div style={label}>{t.skillsLabel}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {t.skills.map((s) => <span key={s} style={{ ...chip, fontSize: 12 }}>{s}</span>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HackSection({ t }) {
  const panel = {
    border: '1px solid rgba(255,255,255,0.08)', borderRadius: 6,
    background: 'rgba(10,14,23,0.55)', backdropFilter: 'blur(2px)', padding: '20px 22px'
  };
  const rowBorder = { borderTop: '1px solid rgba(255,255,255,0.08)', padding: '10px 0' };
  const skillChip = { border: '1px solid rgba(180,90,255,0.3)', borderRadius: 4, color: nightMuted, fontSize: 12, padding: '5px 10px' };
  const sectionLabel = { fontSize: 12, color: violetAccent, marginBottom: 14 };

  return (
    <div style={{ padding: '60px 56px 30px', fontFamily: "'JetBrains Mono',monospace", position: 'relative', overflow: 'hidden' }}>
      <ParticleBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 13, letterSpacing: '0.1em', color: violetAccent, marginBottom: 18 }}>{t.kicker}</div>
        <h1 style={{ fontSize: 64, lineHeight: 1.08, fontWeight: 700, margin: '0 0 20px', color: nightText, textShadow: '2px 0 0 rgba(180,90,255,0.35), -2px 0 0 rgba(0,220,255,0.2)' }}>{t.headline}</h1>
        <p style={{ fontSize: 16, lineHeight: 1.6, maxWidth: 600, margin: '0 0 44px', color: nightMuted }}>{t.sub}</p>

        <div style={{ ...panel, marginBottom: 32 }}>
          <div style={sectionLabel}>./{t.toolsLabel}</div>
          {t.tools.map((tl) => (
            <div key={tl.name} style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 14, color: nightText }}><span style={{ color: violetAccent }}>&#9656;</span> {tl.name}</div>
              <div style={{ fontSize: 13, color: nightMuted, marginLeft: 16 }}>{tl.desc}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 36 }}>
          <div style={panel}>
            <div style={sectionLabel}>./{t.writeupsLabel}</div>
            {t.writeups.map((w) => (
              <div key={w.name} style={rowBorder}>
                <div style={{ fontSize: 14, color: nightText }}>{w.name}</div>
                <div style={{ fontSize: 12, color: nightMuted }}>{w.desc}</div>
              </div>
            ))}
          </div>
          <div style={panel}>
            <div style={sectionLabel}>./{t.ctfsLabel}</div>
            {t.ctfs.map((c) => (
              <div key={c.name} style={{ ...rowBorder, display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                <span style={{ fontSize: 14, color: nightText }}>{c.name}</span>
                <span style={{ fontSize: 12, color: violetAccent }}>{c.result}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ ...panel, marginBottom: 36 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
            <div style={{ fontSize: 12, color: violetAccent }}>./{t.tryhackmeLabel}</div>
            <a href={t.tryhackme.profileUrl} style={{ fontSize: 12, color: violetAccent }}>@{t.tryhackme.username} &rarr;</a>
          </div>
          <div style={{ fontSize: 14, color: nightText, marginBottom: 14 }}>{t.tryhackme.rank}</div>
          {t.tryhackme.rooms.map((r) => (
            <div key={r.name} style={{ ...rowBorder, display: 'flex', justifyContent: 'space-between', gap: 12 }}>
              <span style={{ fontSize: 14, color: nightText }}>{r.name}</span>
              <span style={{ fontSize: 12, color: violetAccent }}>{r.status}</span>
            </div>
          ))}
        </div>

        <div style={panel}>
          <div style={sectionLabel}>./{t.skillsLabel}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {t.skills.map((s) => <span key={s} style={skillChip}>{s}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}