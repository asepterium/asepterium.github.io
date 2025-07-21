const tips = [
  "Setiap enemy membawa item berharga",
  "Naga yang terbang bisa dibreeding",
  "Tambahkan item ke egg untuk ciptakan imajinasimu",
  "Armor langka bisa didapat dari dungeon",
  "Jangan lupakan pet-mu saat bertarung!",
  "Campurkan elemen untuk serangan spesial"
];

const startBtn = document.getElementById("start-button");
const tipText = document.getElementById("tip");
const bar = document.getElementById("loading-bar");
const barContainer = document.getElementById("loading-bar-container");
const percentText = document.getElementById("percentage");
const audio = document.getElementById("loading-audio");
const btnAudio = document.getElementById("button-sound");
const loginPopup = document.getElementById("login-popup");
const loginBtn = document.getElementById("login-button");
const emailInput = document.getElementById("email-input");

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  tipText.textContent = tips[Math.floor(Math.random() * tips.length)];
  tipText.style.display = "block";
  barContainer.style.display = "block";
  percentText.style.display = "block";

  // Play sounds
  btnAudio.play();
  audio.volume = 1.0;
  audio.play().catch(() => {});

  // Start loading
  const duration = 20000;
  const start = Date.now();

  const interval = setInterval(() => {
    const now = Date.now();
    const progress = Math.min((now - start) / duration, 1);
    const percent = Math.floor(progress * 100);
    bar.style.width = percent + "%";
    percentText.textContent = percent + "%";

    if (progress >= 1) {
      clearInterval(interval);
      loginPopup.style.display = "flex";
    }
  }, 100);
});

loginBtn.addEventListener("click", () => {
  const email = emailInput.value.trim();
  if (email.length > 4 && email.includes("@")) {
    localStorage.setItem("asep_email", email);
    window.location.href = "main.html";
  } else {
    alert("Masukkan email yang valid.");
  }
});