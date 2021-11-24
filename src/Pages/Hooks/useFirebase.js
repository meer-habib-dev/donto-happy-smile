import initAuth from "../Shared/Firebase/Firebase.init";
import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

initAuth();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const handleName = (e) => {
    return setName(e.target.value);
  };
  const handleEmail = (e) => {
    return setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    return setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password, name).then(
      (result) => {
        setUser(result.user);
      }
    );
  };

  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider).finally(() =>
      setIsLoading(false)
    );
  };

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, []);

  return {
    user,
    name,
    isLoading,
    setUser,
    handleName,
    handleEmail,
    handlePassword,
    handleSubmit,
    signInUsingGoogle,
    logOut,
  };
};

export default useFirebase;
