import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDocs,
  deleteDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyBHZbz8oaz1tFVnKzT75FIiSmBeOXBtEyk",
  authDomain: "random-390ea.firebaseapp.com",
  projectId: "random-390ea",
  storageBucket: "random-390ea.firebasestorage.app",
  messagingSenderId: "1067767982850",
  appId: "1:1067767982850:web:a1e092345d70e169cef01b"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// export ให้ใช้ทั่วเว็บ
window.db = db
window.colRef = collection
window.docRef = doc
window.setDoc = setDoc
window.getDocs = getDocs
window.deleteDoc = deleteDoc
window.serverTimestamp = serverTimestamp