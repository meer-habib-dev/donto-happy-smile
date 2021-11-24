import firebaseConfig from "./Firebase.config";
import { initializeApp } from "firebase/app";

const initAuth = () => {
    return initializeApp(firebaseConfig);
}

export default initAuth;