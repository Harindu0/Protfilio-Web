  document.addEventListener('DOMContentLoaded', () => {

    // Keep the footer year accurate automatically.
    const yearEl = document.getElementById('year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }

    // Clicking the down arrow smoothly scrolls to the footer.
    const arrow = document.querySelector('.arrow');
    const footer = document.querySelector('.site-footer');
    if (arrow && footer) {
      arrow.addEventListener('click', () => {
        footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }

    // PoopPoop card: placeholder link for now (no jump to top), and clicking
    // it fills the screen with little poops, then fades them out.
    const poopCard = document.getElementById('poopCard');
    let pooping = false;

    if (poopCard) {
      poopCard.addEventListener('click', (event) => {
        if (poopCard.getAttribute('href') === '#') {
          event.preventDefault();
        }
        if (pooping) return;
        pooping = true;

        const layer = document.createElement('div');
        layer.className = 'poop-layer';
        document.body.appendChild(layer);

        // Scale the amount to the screen size so phones don't get overloaded.
        const count = Math.min(220, Math.floor((innerWidth * innerHeight) / 6000));

        for (let i = 0; i < count; i++) {
          const p = document.createElement('span');
          p.className = 'poop';
          p.textContent = '💩';
          p.style.left = Math.random() * 100 + 'vw';
          p.style.top = Math.random() * 100 + 'vh';
          p.style.fontSize = 20 + Math.random() * 40 + 'px';
          p.style.setProperty('--rot', Math.random() * 60 - 30 + 'deg');
          p.style.animationDelay = i * 15 + 'ms';
          layer.appendChild(p);
        }

        // Keep the screen full for 2 seconds, then fade out and clean up.
        setTimeout(() => {
          layer.classList.add('fade');
          setTimeout(() => {
            layer.remove();
            pooping = false;
          }, 600);
        }, count * 15 + 2000);
      });
    }

    // Video Sound 
    const video = document.getElementById("visualBox");
    const btn = document.getElementById("soundBtn");

    btn.addEventListener("click", () => {
        video.muted = !video.muted;

        if (video.muted) {
            btn.textContent = "🔊";
        } else {
            btn.textContent = "🔇";
        }
    });

  });
