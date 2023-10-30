// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDuAPMgRohXbPCzGpIDQWIH7Y20cRewFKg",
    authDomain: "x-clone-d9f9d.firebaseapp.com",
    projectId: "x-clone-d9f9d",
    storageBucket: "x-clone-d9f9d.appspot.com",
    messagingSenderId: "356518960266",
    appId: "1:356518960266:web:c29507eedac0e8d65ee173",
    measurementId: "G-3WQJTJ12EC"
  };

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  export default db;