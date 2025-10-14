// Reveal on scroll
(() => {
  const io = new IntersectionObserver(es => es.forEach(e => e.target.classList.toggle('show', e.isIntersecting)), {threshold:.12});
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();
// Tilt card
(() => {
  const max = 8;
  document.querySelectorAll('.tilt').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      card.style.transform = `rotateX(${(-y*max)}deg) rotateY(${(x*max)}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => card.style.transform = '');
  });
})();
// Typewriter (nếu có phần tử #typewriter)
(() => {
  const el = document.getElementById('typewriter'); if(!el) return;
  const words = JSON.parse(el.dataset.words || '[]'); let i=0, j=0, dir=1;
  const tick = () => { const w = words[i] || ""; j += dir; el.textContent = w.slice(0,j);
    if (j === w.length + 8) dir = -1; if (j === 0){ dir = 1; i = (i+1)%words.length; }
    setTimeout(tick, 80);
  }; tick();
})();