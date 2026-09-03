const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

if (navToggle && nav) {
  const closeNav = () => {
    navToggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    document.body.classList.remove('nav-open');
  };

  navToggle.addEventListener('click', () => {
    const open = navToggle.getAttribute('aria-expanded') !== 'true';
    navToggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);
  });

  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNav));
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeNav();
  });
}

const revealItems = document.querySelectorAll('.reveal');
revealItems.forEach((item) => {
  const delay = item.dataset.delay;
  if (delay) item.style.setProperty('--delay', `${delay}ms`);
});

if (!reduceMotion && 'IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());

async function initTerrain() {
  const canvas = document.getElementById('terrain-canvas');
  if (!canvas) return;

  try {
    const THREE = await import('https://cdn.jsdelivr.net/npm/three@0.160.1/build/three.module.js');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(31, 1, 0.1, 100);
    camera.position.set(0, 4.3, 8.2);
    camera.lookAt(0.8, -0.4, 0);

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
    renderer.setClearColor(0x000000, 0);

    const geometry = new THREE.PlaneGeometry(14, 9, 42, 28);
    const original = geometry.attributes.position.array.slice();
    const material = new THREE.MeshBasicMaterial({
      color: 0xe5bb77,
      wireframe: true,
      transparent: true,
      opacity: 0.22
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI * 0.48;
    mesh.rotation.z = -0.08;
    mesh.position.set(2.6, -0.8, 0);
    scene.add(mesh);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      renderer.setSize(rect.width, rect.height, false);
      camera.aspect = rect.width / rect.height;
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const position = geometry.attributes.position;
    let raf = 0;

    const renderTerrain = (time = 0) => {
      const t = reduceMotion ? 0 : time * 0.00024;
      for (let i = 0; i < position.count; i += 1) {
        const baseX = original[i * 3];
        const baseY = original[i * 3 + 1];
        const wave = Math.sin(baseX * 0.72 + t) * 0.25 + Math.cos(baseY * 0.82 - t * 0.72) * 0.2;
        const roll = Math.sin((baseX + baseY) * 0.35) * 0.22;
        position.setZ(i, wave + roll);
      }
      position.needsUpdate = true;
      renderer.render(scene, camera);
      if (!reduceMotion) raf = requestAnimationFrame(renderTerrain);
    };

    renderTerrain();

    document.addEventListener('visibilitychange', () => {
      if (reduceMotion) return;
      if (document.hidden) cancelAnimationFrame(raf);
      else raf = requestAnimationFrame(renderTerrain);
    });
  } catch (error) {
    console.info('Three.js terrain enhancement unavailable; using CSS fallback.', error);
  }
}

initTerrain();
