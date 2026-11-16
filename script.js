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

    // Video Sound 
    const video = document.getElementById("visualBox");
    const btn = document.getElementById("soundBtn");

    if (btn && video) {
        btn.addEventListener("click", () => {
            video.muted = !video.muted;
            if (video.muted) {
                btn.textContent = "🔊";
            } else {
                btn.textContent = "🔇";
            }
        });
    }

    // ==========================================
    // GAME MODAL LOGIC
    // ==========================================
    const playBtn = document.getElementById('playGameBtn');
    const closeBtn = document.getElementById('closeGameBtn');
    const modal = document.getElementById('gameModal');
    const iframe = document.getElementById('gameIframe');

    if (playBtn && modal && iframe) {
        // Open Game
        playBtn.addEventListener('click', () => {
            // Load the game into the iframe ONLY when clicked
            iframe.src = '/game/index.html'; 
            
            // Show the modal
            modal.style.display = 'flex';
            
            // Tiny delay for the fade-in animation to work properly
            setTimeout(() => { modal.style.opacity = '1'; }, 10);
        });

        // Close Game Function
        function closeGame() {
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.style.display = 'none';
                // Clear the iframe to stop the game completely and reset it
                iframe.src = ''; 
            }, 300);
        }

        // Close on button click
        if (closeBtn) {
            closeBtn.addEventListener('click', closeGame);
        }

        // Also close if they click outside the game area (on the dark background)
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeGame();
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'flex') closeGame();
        });
    }

});
