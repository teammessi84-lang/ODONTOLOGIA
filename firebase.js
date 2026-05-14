import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getDatabase,
  ref,
  push
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {

  apiKey: "AIzaSyDJ5u-eNDrun9-XfLS-A8MFjn3e69E_Jhs",

  authDomain: "odontos-f856c.firebaseapp.com",

  databaseURL: "https://odontos-f856c-default-rtdb.firebaseio.com",

  projectId: "odontos-f856c",

  storageBucket: "odontos-f856c.firebasestorage.app",

  messagingSenderId: "941253430623",

  appId: "1:941253430623:web:ff9741c350073a77103aea"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

window.guardarPacienteFirebase = function (paciente) {

  push(ref(db, "pacientes"), paciente);

  console.log("Paciente guardado en Firebase");
}