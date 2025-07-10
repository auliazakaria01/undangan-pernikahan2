document.getElementById("openBtn").addEventListener("click", function () {
  const invitationSection = document.getElementById("invitation");
  invitationSection.style.display = "block";
  invitationSection.scrollIntoView({ behavior: "smooth" });
});

function salinRekening() {
  const nomorRekening = "6401-0103-3389-532";
  navigator.clipboard.writeText(nomorRekening).then(function () {
    document.getElementById("notif").innerText = "Nomor rekening berhasil disalin!";
  }, function () {
    document.getElementById("notif").innerText = "Gagal menyalin nomor rekening.";
  });
}