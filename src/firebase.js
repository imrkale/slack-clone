// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCX1aEeTnxS5GXzUzaoojravnjxkMh8ntc",
    authDomain: "slack-clone-b7a58.firebaseapp.com",
    projectId: "slack-clone-b7a58",
    storageBucket: "slack-clone-b7a58.appspot.com",
    messagingSenderId: "606647703290",
    appId: "1:606647703290:web:7a5c9ee24f4be79ec89b43",
    measurementId: "G-DHNZH6HHV6"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider,db};