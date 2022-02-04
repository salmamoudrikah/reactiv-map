import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBDJLiQfsN12cjoYebZzgBSWumPakEt0oQ",
    authDomain: "test-1a0aa.firebaseapp.com",
    projectId: "test-1a0aa",
    storageBucket: "test-1a0aa.appspot.com",
    messagingSenderId: "813391855341",
    appId: "1:813391855341:web:1e8501d8563a030a0a16e4",
    measurementId: "G-SK84P81VBD"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();

  export default db;