import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyAfZoYKddSAuSDsda_3QAp15qGI-hwZvAE",
  authDomain: "app-android404.firebaseapp.com",
  projectId: "app-android404",
  storageBucket: "app-android404.appspot.com",
  messagingSenderId: "166062360934",
  appId: "1:166062360934:web:676ae29488905b414d60a7",
  measurementId: "G-L1NH1N75TD"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
export default firebase;