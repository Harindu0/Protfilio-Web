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
    // GAME MODAL & FULLSCREEN LOGIC
    // ==========================================
    const playBtn = document.getElementById('playGameBtn');
    const closeBtn = document.getElementById('closeGameBtn');
    const modal = document.getElementById('gameModal');
    const iframe = document.getElementById('gameIframe');

    if (playBtn && modal && iframe) {
        
        // Open Game and Go Fullscreen
        playBtn.addEventListener('click', () => {
            // 1. Load the game (make sure this matches your folder name!)
            iframe.src = '/game/index.html'; 
            
            // 2. Show the modal container
            modal.style.display = 'flex';
            
            // 3. Fade it in
            setTimeout(() => { 
                modal.style.opacity = '1'; 
            }, 10);

            // 4. Request Fullscreen on the Modal itself
            if (modal.requestFullscreen) {
                modal.requestFullscreen().catch((err) => {
                    console.log("Fullscreen error:", err);
                });
            } else if (modal.webkitRequestFullscreen) { /* Safari */
                modal.webkitRequestFullscreen();
            } else if (modal.msRequestFullscreen) { /* IE11 */
                modal.msRequestFullscreen();
            }
        });

        // Close Game Function
        function closeGame() {
            modal.style.opacity = '0';
            
            // Exit Fullscreen if we are in it
            if (document.fullscreenElement) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
            }

            setTimeout(() => {
                modal.style.display = 'none';
                iframe.src = ''; // Stop the game completely
            }, 300);
        }

        // Close on button click
        if (closeBtn) {
            closeBtn.addEventListener('click', closeGame);
        }

        // Also close if they click the dark background
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeGame();
        });

        // Close on Escape key (Note: pressing Esc while in fullscreen automatically exits fullscreen)
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'flex') {
                closeGame();
            }
        });

        // Extra safeguard: If the user exits fullscreen using F11 or Esc, close the game modal too
        document.addEventListener('fullscreenchange', () => {
            if (!document.fullscreenElement && modal.style.display === 'flex') {
                closeGame();
            }
        });
    }

});
