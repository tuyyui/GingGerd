import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "",
    authDomain: "m",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  fire.analytics();
  export default fire


 
