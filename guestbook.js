// ===============================
// Firebase Guestbook (완성본)
// ===============================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";


// ===============================
// Firebase 설정 (너 코드 그대로)
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
// Firebase 초기화
// ===============================
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// ===============================
// 방명록 저장
// ===============================
async function addGuestbook(name, message) {
  try {
    await addDoc(collection(db, "guestbook"), {
      name: name,
      message: message,
      createdAt: serverTimestamp()
    });
  } catch (e) {
    console.error("저장 실패:", e);
  }
}


// ===============================
// 방명록 불러오기
// ===============================
async function loadGuestbook() {
  const q = query(
    collection(db, "guestbook"),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  const list = [];

  snapshot.forEach((doc) => {
    const data = doc.data();

    list.push({
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
// 화면에 출력
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
      <small>${item.date}</small>
    `;

    container.appendChild(div);
  });
}


// ===============================
// 버튼 연결 (핵심)
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
// 처음 로딩 시 실행
// ===============================
renderGuestbook();
