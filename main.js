// LEGACY MOVING — Interações v1.2
(function() {
  'use strict';

  // Hero carrossel — fade automático entre os serviços
  const slides = document.querySelectorAll('.hero__slide');
  const indicators = document.querySelectorAll('.hero__indicator');
  if (slides.length > 1) {
    let current = 0;
    let timer = null;
    const goTo = (idx) => {
      slides[current].classList.remove('active');
      indicators[current]?.classList.remove('active');
      current = idx;
      slides[current].classList.add('active');
      indicators[current]?.classList.add('active');
    };
    const next = () => goTo((current + 1) % slides.length);
    const startAuto = () => { timer = setInterval(next, 5500); };
    const stopAuto = () => { clearInterval(timer); };
    indicators.forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        stopAuto();
        goTo(idx);
        startAuto();
      });
    });
    startAuto();
  }

  // Menu mobile toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const siteNav = document.querySelector('.site-nav');
  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', () => {
      siteNav.classList.toggle('active');
    });
  }

  // Reveal on scroll
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('visible'));
  }

  // Formulário Guia (lead capture)
  const guideForm = document.querySelector('[data-form="guia"]');
  if (guideForm) {
    guideForm.addEventListener('submit', function(e) {
      const channel = guideForm.querySelector('input[name="canal"]:checked')?.value || 'email';
      const contact = guideForm.querySelector('[name="contato"]').value;
      const payload = {
        source: 'guia-legacy',
        channel: channel,
        contact: contact,
        timestamp: new Date().toISOString()
      };
      // Evento global para integração com sistema Legacy
      window.dispatchEvent(new CustomEvent('legacy:lead', { detail: payload }));
    });
  }

  // Formulário Orçamento — preparação de payload estruturado
  const orcForm = document.querySelector('[data-form="orcamento"]');
  if (orcForm) {
    orcForm.addEventListener('submit', function(e) {
      const data = new FormData(orcForm);
      const payload = {
        source: 'orcamento',
        servico: data.get('servico'),
        origem_cep: data.get('origem'),
        destino_cep: data.get('destino'),
        data_desejada: data.get('data'),
        tamanho: data.get('tamanho'),
        nome: data.get('nome'),
        telefone: data.get('telefone'),
        email: data.get('email'),
        observacoes: data.get('observacoes'),
        timestamp: new Date().toISOString()
      };
      window.dispatchEvent(new CustomEvent('legacy:lead', { detail: payload }));
    });
  }
})();