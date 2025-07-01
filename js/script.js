// js/script.js

// Deteksi orientasi layar
function updateOrientation() {
  if (window.innerHeight > window.innerWidth) {
    document.body.classList.add('portrait');
  } else {
    document.body.classList.remove('portrait');
  }
}

window.addEventListener('resize', updateOrientation);
window.addEventListener('orientationchange', updateOrientation);
updateOrientation();

// Simulasi loading bar (placeholder)
const loadingFill = document.querySelector('.loading-fill');
let progress = 0;

const loadingInterval = setInterval(() => {
  progress += 1;
  loadingFill.style.width = progress + '%';

  if (progress >= 100) {
    clearInterval(loadingInterval);
    console.log("Selesai loading (simulasi)");
  }
}, 30);
