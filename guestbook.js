import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";


// ===============================
// Firebase 설정
// ===============================
const firebaseConfig = {
  apiKey: "AIzaSyCZJlxqpl-V1RCwx37syPd81nzyCMW6A2M",
  authDomain: "eunddonng.firebaseapp.com",
  projectId: "eunddonng",
  storageBucket: "eunddonng.firebasestorage.app",
  messagingSenderId: "399295226778",
  appId: "1:399295226778:web:d19e3b11f20af169291023"
};


// ===============================
// 초기화
// ===============================
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// ===============================
// 저장
// ===============================
async function addGuestbook(name, message) {
  await addDoc(collection(db, "guestbook"), {
    name,
    message,
    createdAt: serverTimestamp()
  });
}


// ===============================
// 삭제
// ===============================
async function deleteGuestbook(id) {
  await deleteDoc(doc(db, "guestbook", id));
}


// ===============================
// 불러오기
// ===============================
async function loadGuestbook() {
  const q = query(
    collection(db, "guestbook"),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  const list = [];

  snapshot.forEach((docItem) => {
    const data = docItem.data();

    list.push({
      id: docItem.id,
      name: data.name,
      message: data.message,
      date: data.createdAt
        ? new Date(data.createdAt.seconds * 1000).toLocaleString()
        : ""
    });
  });

  return list;
}


// ===============================
// 화면 출력
// ===============================
async function renderGuestbook() {
  const container = document.getElementById("guestbook-list");
  container.innerHTML = "";

  const list = await loadGuestbook();

  list.forEach((item) => {
    const div = document.createElement("div");

    div.style.marginBottom = "12px";
    div.style.padding = "10px";
    div.style.borderBottom = "1px solid #eee";

    div.innerHTML = `
      <strong>${item.name}</strong><br>
      <div>${item.message}</div>
      <small>${item.date}</small><br>
      <button class="delete-btn" data-id="${item.id}">
        삭제
      </button>
    `;

    container.appendChild(div);
  });

  // ===============================
  // 삭제 버튼 (🔥 실수 방지 추가)
  // ===============================
  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      const id = e.target.getAttribute("data-id");

      // 🔥 실수 삭제 방지
      const confirmDelete = confirm("정말 이 방명록을 삭제할까요?");

      if (!confirmDelete) return;

      await deleteGuestbook(id);
      renderGuestbook();
    });
  });
}


// ===============================
// 저장 버튼
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


// ===============================
// 최초 실행
// ===============================
renderGuestbook();
