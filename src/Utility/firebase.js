
import { firebase } from "firebase/app";
// auth
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx7MP8Y3IHjT2fj_U056ZL09dX2NA3UVM",
  authDomain: "clone-a93c1.firebaseapp.com",
  projectId: "clone-a93c1",
  storageBucket: "clone-a93c1.appspot.com",
  messagingSenderId: "245085800524",
  appId: "1:245085800524:web:fdaf4fe5a787c867ab4ce9",
};
//Initialize firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore()
