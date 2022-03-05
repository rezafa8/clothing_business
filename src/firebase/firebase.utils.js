import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {

    apiKey: "AIzaSyDvuVE8NzjUw5FuOZqxlX8rj4hTHZgkpEA",
    authDomain: "crwd-db-f5dd7.firebaseapp.com",
    projectId: "crwd-db-f5dd7",
    storageBucket: "crwd-db-f5dd7.appspot.com",
    messagingSenderId: "95599041030",
    appId: "1:95599041030:web:b00f646e66b645e23c8187"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;