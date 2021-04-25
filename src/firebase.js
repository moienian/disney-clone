import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "disney-clone-f1373.firebaseapp.com",
  projectId: "disney-clone-f1373",
  storageBucket: "disney-clone-f1373.appspot.com",
  messagingSenderId: "124216031982",
  appId: "1:124216031982:web:63ce780ff31e036e20d1ff",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
