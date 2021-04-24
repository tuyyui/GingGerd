import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBlgi-SRpq9yjc4DCdmbbC_JWwSKy1b_KQ",
    authDomain: "users-gerdwebsite.firebaseapp.com",
    projectId: "users-gerdwebsite",
    storageBucket: "users-gerdwebsite.appspot.com",
    messagingSenderId: "883131266372",
    appId: "1:883131266372:web:4500909a0751ad9068d311",
    measurementId: "G-F3SYFBZXZJ"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  fire.analytics();
  export default fire


 