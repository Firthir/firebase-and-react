import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyDp7If8BSSYl_xI3MtQm0yK3QnIPBSeQD8",
  authDomain: "fir-and-react-3a86e.firebaseapp.com",
  databaseURL: "https://fir-and-react-3a86e.firebaseio.com",
  projectId: "fir-and-react-3a86e",
  storageBucket: "fir-and-react-3a86e.appspot.com",
  messagingSenderId: "222653892396"
};
var fire = firebase.initializeApp(config);
export default fire;
