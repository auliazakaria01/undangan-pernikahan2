function bukaUndangan() {
  document.getElementById("cover").style.display = "none";
  document.getElementById("undangan").style.display = "block";
}

const countdown = document.getElementById("countdown");
const targetDate = new Date("2026-01-19T09:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    countdown.innerHTML = "Acara sudah dimulai!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;
}, 1000);

const bgMusic = document.getElementById("bg-music");
if (bgMusic) bgMusic.volume = 0.3;