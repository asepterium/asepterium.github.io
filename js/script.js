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

// Simulasi loading progress
let progress = 0;
const loadingFill = document.querySelector('.loading-fill');
const interval = setInterval(() => {
  progress += 2;
  loadingFill.style.width = progress + '%';
  if (progress >= 100) clearInterval(interval);
}, 60);
