import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../services/firebase.config";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth]);

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const registerUserWithEmailAndPass = async (email, pass, name, photo) => {};

  const loginWithEmailAndPass = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const updateUserProfile = (name, photo) => {};

  const sendPassResetMail = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const logOut = () => {
    signOut(auth);
  };

  const authInfo = {
    user,
    loading,
    loginWithGoogle,
    registerUserWithEmailAndPass,
    loginWithEmailAndPass,
    sendPassResetMail,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {!loading ? children : <div>Loading...</div>}{" "}
      {/* Loading spinner or placeholder */}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
