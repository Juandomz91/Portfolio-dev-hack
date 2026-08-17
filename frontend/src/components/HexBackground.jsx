import { useEffect, useRef } from 'react';

// Tessellated hexagon grid that reacts to mouse proximity (scale + rotate).
export default function HexBackground() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const el = canvasRef.current;
    const parent = el.parentElement;
    const ctx = el.getContext('2d');
    const r = 69;
    const hexW = Math.sqrt(3) * r;
    const hexH = 1.5 * r;
    let cols = 0, rows = 0, raf;

    const resize = () => {
      el.width = parent.clientWidth;
      el.height = parent.clientHeight;
      cols = Math.ceil(el.width / hexW) + 2;
      rows = Math.ceil(el.height / hexH) + 2;
    };
    resize();

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
      for (let j = 0; j < rows; j++) {
        const rowOffset = (j % 2) * (hexW / 2);
        for (let i = 0; i < cols; i++) {
          const cx = i * hexW + rowOffset, cy = j * hexH;
          const dx = cx - mouse.current.x, dy = cy - mouse.current.y;
          const dist = Math.hypot(dx, dy);
          const influence = Math.max(0, 1 - dist / 260);
          const scale = 1 - influence * 0.18;
          const rotate = influence * 14 * (dx > 0 ? 1 : -1);
          ctx.save();
          ctx.translate(cx, cy);
          ctx.rotate((rotate * Math.PI) / 180);
          ctx.scale(scale, scale);
          ctx.strokeStyle = `rgba(40,90,180,${0.1 + influence * 0.28})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          for (let k = 0; k < 6; k++) {
            const angle = (Math.PI / 3) * k - Math.PI / 2;
            const px = r * Math.cos(angle), py = r * Math.sin(angle);
            if (k === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
          }
          ctx.closePath();
          ctx.stroke();
          ctx.restore();
        }
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