// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDRIG-m_u_BCDII2jmPZ4eA4brUk1gocfs",
  authDomain: "mad-quiz-31eaa.firebaseapp.com",
  projectId: "mad-quiz-31eaa",
  storageBucket: "mad-quiz-31eaa.appspot.com",
  messagingSenderId: "545025031642",
  appId: "1:545025031642:web:e122def1a21f1d743654e3",
  measurementId: "G-J5346JDHQM",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// export const auth = getAuth(firebaseApp);
export const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// change the rules of Storage as follows:

// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read, write: if true;
//     }
//   }
// }

export const storage = getStorage(firebaseApp);
