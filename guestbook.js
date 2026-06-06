// ===============================
// HTML 버튼 연결
// ===============================
document.getElementById("guest-submit").addEventListener("click", async () => {
  const name = document.getElementById("guest-name").value;
  const message = document.getElementById("guest-message").value;

  if (!name || !message) return;

  await addGuestbook(name, message);

  document.getElementById("guest-name").value = "";
  document.getElementById("guest-message").value = "";

  renderGuestbook();
});

// 처음 로딩 시 목록 불러오기
renderGuestbook();
