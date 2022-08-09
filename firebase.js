// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVv0shUL8pPBVmHY1pD7BaX0EwgK0--MA",
  authDomain: "fir-julios.firebaseapp.com",
  projectId: "fir-julios",
  storageBucket: "fir-julios.appspot.com",
  messagingSenderId: "849821748172",
  appId: "1:849821748172:web:10d728a85f8794daa0eb69"
};

// Initialize Firebase

let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig); 
} else {
     app = firebase.app()
}

const auth = firebase.auth();

export {auth}