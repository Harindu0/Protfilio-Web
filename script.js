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

    // The Tomoji card is a placeholder link for now — prevent the page
    // from jumping to the top until a real destination is wired up.
    const tomojiCard = document.getElementById('tomojiCard');
    if (tomojiCard) {
      tomojiCard.addEventListener('click', (event) => {
        if (tomojiCard.getAttribute('href') === '#') {
          event.preventDefault();
        }
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
