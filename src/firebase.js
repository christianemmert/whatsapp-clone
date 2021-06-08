import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC2yt40sAXm2jtZ3OlBxdW0ILCHGnDQYhM",
    authDomain: "whatsapp-clone-67b4f.firebaseapp.com",
    projectId: "whatsapp-clone-67b4f",
    storageBucket: "whatsapp-clone-67b4f.appspot.com",
    messagingSenderId: "829830578131",
    appId: "1:829830578131:web:7a1eb2e43e76e7a1893926"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;