import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyANGhBwIRRL0Hr5XJTkgSvMEgIkxoad4SU",
  authDomain: "slack-react-ff3d1.firebaseapp.com",
  projectId: "slack-react-ff3d1",
  storageBucket: "slack-react-ff3d1.appspot.com",
  messagingSenderId: "25927570655",
  appId: "1:25927570655:web:aa07a7f300c4a84b0ac56a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider } 


/*   import { initializeApp } from 'firebase/app';
  import { getFirestore} from 'firebase/firestore/lite';

  const firebaseConfig = {
    apiKey: "AIzaSyANGhBwIRRL0Hr5XJTkgSvMEgIkxoad4SU",
    authDomain: "slack-react-ff3d1.firebaseapp.com",
    projectId: "slack-react-ff3d1",
    storageBucket: "slack-react-ff3d1.appspot.com",
    messagingSenderId: "25927570655",
    appId: "1:25927570655:web:aa07a7f300c4a84b0ac56a"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app); */