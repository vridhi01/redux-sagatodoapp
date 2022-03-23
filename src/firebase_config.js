import Firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAbk9MeDkgqQOieN3RwUxO7Z3w2xTrGzbc",
    authDomain: "todoapp-51216.firebaseapp.com",
    projectId: "todoapp-51216",
    storageBucket: "todoapp-51216.appspot.com",
    messagingSenderId: "976657770368",
    appId: "1:976657770368:web:04cbb5b9850bf9e2d24365"
  };
 

const fireDb = Firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref("Todo") ;