import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDEEcVNuS_OFAKENIhhT2vZVOhqiBkhy8E",
    authDomain: "slack-clone-37e6e.firebaseapp.com",
    projectId: "slack-clone-37e6e",
    storageBucket: "slack-clone-37e6e.appspot.com",
    messagingSenderId: "231204737117",
    appId: "1:231204737117:web:5519ffc7a3bd90baa47db4",
    measurementId: "G-B255BSWPD1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;

