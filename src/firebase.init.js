// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg2qYgfCs198AGOdYTMxgMDIPGQ6bjHVo",
  authDomain: "discount-pro-9e6ca.firebaseapp.com",
  projectId: "discount-pro-9e6ca",
  storageBucket: "discount-pro-9e6ca.firebasestorage.app",
  messagingSenderId: "550337006759",
  appId: "1:550337006759:web:0fbd315d1ecbbd397c5f82",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
