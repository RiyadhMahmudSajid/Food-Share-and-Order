// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBuFuhbtw6MrrqHbsA5o4SPLo-KiLoSwE",
  authDomain: "food-sharing-c074e.firebaseapp.com",
  projectId: "food-sharing-c074e",
  storageBucket: "food-sharing-c074e.firebasestorage.app",
  messagingSenderId: "905914395893",
  appId: "1:905914395893:web:57ae9fd98f6e42901169bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth
