import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig ={
    apiKey: "AIzaSyDP-ybbAwEv6gY4dDiKublNlZ5Grk53Ewg",
    authDomain: "chatapp-9cc2f.firebaseapp.com",
    projectId: "chatapp-9cc2f",
    storageBucket: "chatapp-9cc2f.appspot.com",
    messagingSenderId: "955906233691",
    appId: "1:955906233691:web:5181c2c587a93799f6767e",
    measurementId: "G-HTLE0SYEQZ"
}
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebaseApp.auth();

export {db,auth};