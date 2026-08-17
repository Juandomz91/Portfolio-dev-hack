import { useEffect, useRef } from 'react';

// Violet particle network that repels from and connects to the cursor.
export default function ParticleBackground() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const el = canvasRef.current;
    const parent = el.parentElement;
    const ctx = el.getContext('2d');
    const N = 90;
    const dots = [];
    let raf;

    const resize = () => {
      el.width = parent.clientWidth;
      el.height = parent.clientHeight;
    };
    resize();
    for (let i = 0; i < N; i++) {
      dots.push({
        x: Math.random() * el.width,
        y: Math.random() * el.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4
      });
    }

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => { mouse.current = { x: -9999, y: -9999 }; };

    parent.addEventListener('mousemove', onMove);
    parent.addEventListener('mouseleave', onLeave);
    window.addEventListener('resize', resize);

    const tick = () => {
      ctx.clearRect(0, 0, el.width, el.height);
      for (const d of dots) {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > el.width) d.vx *= -1;
        if (d.y < 0 || d.y > el.height) d.vy *= -1;
        const dx = d.x - mouse.current.x, dy = d.y - mouse.current.y;
        const distM = Math.hypot(dx, dy);
        if (distM < 140) { d.x += (dx / distM) * 0.6; d.y += (dy / distM) * 0.6; }
      }
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x, dy = dots[i].y - dots[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < 110) {
            ctx.strokeStyle = `rgba(180,90,255,${0.16 * (1 - dist / 110)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
        const dm = Math.hypot(dots[i].x - mouse.current.x, dots[i].y - mouse.current.y);
        if (dm < 140) {
          ctx.strokeStyle = `rgba(180,90,255,${0.3 * (1 - dm / 140)})`;
          ctx.beginPath();
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(mouse.current.x, mouse.current.y);
          ctx.stroke();
        }
        ctx.fillStyle = 'rgba(200,150,255,0.7)';
        ctx.beginPath();
        ctx.arc(dots[i].x, dots[i].y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      parent.removeEventListener('mousemove', onMove);
      parent.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
    />
  );
}