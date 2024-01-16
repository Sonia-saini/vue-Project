// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs ,addDoc,doc,getDoc} from 'firebase/firestore/lite'
// import { addDoc } from "firebase/firestore"; 
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNBkZ-akbic2BALCLPPwsQg2joW7TC5Q0",
  authDomain: "view-online-project.firebaseapp.com",
  projectId: "view-online-project",
  storageBucket: "view-online-project.appspot.com",
  messagingSenderId: "96197171981",
  appId: "1:96197171981:web:a7afd6a5dccda060c26e44",
  measurementId: "G-JDCXXBQ00R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app)
// const analytics = getAnalytics(app);
export  {app,db,collection,getDocs,getStorage, ref, uploadBytesResumable, getDownloadURL,addDoc,doc,getDoc};