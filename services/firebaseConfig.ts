// Importar las funciones necesarias del SDK de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// --- CONFIGURACIÓN DE FIREBASE (MetroMaint BCN) ---
// Extraída de tu captura de pantalla. ¡Ya está lista!

const firebaseConfig = {
  apiKey: "AIzaSyB6KZdn99OJYRx0c9Sdf6hmjnpHV1uLb3Y",
  authDomain: "metromaint-bcn.firebaseapp.com",
  projectId: "metromaint-bcn",
  storageBucket: "metromaint-bcn.firebasestorage.app",
  messagingSenderId: "914679456958",
  appId: "1:914679456958:web:29543fe81fcdff4a076aef",
  measurementId: "G-WGS7CJCS2C"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar la base de datos (Firestore) y exportarla
export const db = getFirestore(app);
