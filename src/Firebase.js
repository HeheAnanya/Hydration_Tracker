// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// const firebaseConfig = {
//   apiKey: "AIzaSyBUtyQUDpyUAaxJg5bBktVdNDSFMlgTjxQ",
//   authDomain: "learn-c25f2.firebaseapp.com",
//   projectId: "learn-c25f2",
//   storageBucket: "learn-c25f2.firebasestorage.app",
//   messagingSenderId: "635077544408",
//   appId: "1:635077544408:web:ec212a9428638f465d0aad"
// };

// export const app = initializeApp(firebaseConfig);
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgP0mwCFQjFIaOMRhBkNxk_Sgx57WMnY8",
  authDomain: "hydration-tracker-e6dbe.firebaseapp.com",
  projectId: "hydration-tracker-e6dbe",
  storageBucket: "hydration-tracker-e6dbe.firebasestorage.app",
  messagingSenderId: "993590400796",
  appId: "1:993590400796:web:0b7831ebb8c15c2b4dccd9",
  measurementId: "G-26W3PZELPC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };