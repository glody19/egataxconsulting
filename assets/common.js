(() => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* Menu mobile */
  const burger = document.querySelector('[data-burger]');
  const menu = document.querySelector('[data-menu]');
  if (burger && menu) {
    const set = (open) => {
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
      document.body.classList.toggle('menu-open', open);
    };
    burger.addEventListener('click', () => set(burger.getAttribute('aria-expanded') !== 'true'));
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => set(false)));
    window.addEventListener('keydown', e => { if (e.key === 'Escape') set(false); });
  }

  /* En-tête : ombre légère au défilement */
  const header = document.querySelector('[data-header]');
  if (header) {
    const f = () => header.classList.toggle('is-scrolled', window.scrollY > 10);
    f(); window.addEventListener('scroll', f, { passive: true });
  }

  /* Apparition douce des sections */
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    }), { threshold: 0.12 });
    document.querySelectorAll('.fade').forEach(el => io.observe(el));
  } else {
    document.querySelectorAll('.fade').forEach(el => el.classList.add('is-in'));
  }

  /* Formulaire de contact -> messagerie */
  const form = document.querySelector('[data-contact]');
  if (form) {
    const note = form.querySelector('[data-note]');
    form.addEventListener('submit', e => {
      e.preventDefault();
      let ok = true;
      ['nom', 'email', 'message'].forEach(n => {
        const f = form.elements[n];
        const v = f.value.trim() && (n !== 'email' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value));
        f.classList.toggle('is-invalid', !v);
        if (!v && ok) { f.focus(); ok = false; }
      });
      if (!ok) { note.textContent = 'Merci de compléter les champs indiqués.'; note.classList.add('is-error'); return; }
      const d = new FormData(form);
      const subject = `Demande de contact — ${d.get('nom')}`;
      const body = `Nom : ${d.get('nom')}\nE-mail : ${d.get('email')}\nTéléphone : ${d.get('tel') || '—'}\nObjet : ${d.get('objet') || '—'}\n\n${d.get('message')}`;
      location.href = `mailto:info@egataxconsulting.be?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      note.classList.remove('is-error');
      note.textContent = 'Merci ! Votre messagerie s’ouvre avec votre demande pré-remplie.';
    });
    form.addEventListener('input', e => e.target.classList.remove('is-invalid'));
  }
})();
