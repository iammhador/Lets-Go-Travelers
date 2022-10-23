import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.init";
import { GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app);

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

const Context = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  //# Google Login :
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //# Register New User :
  const registerNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //# Login Existing User :
  const loginOldUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //# Send Email Verification :
  const sendVerification = () => {
    setLoading(true);
    return sendEmailVerification(auth.currentUser);
  };

  //# Update User Name And Photo:
  const updateNameAndPhoto = (username, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: username,
      photoURL: photo,
    });
  };

  //# Send Password Reset Email:
  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  //# Logout User :
  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  //# Find Current User Information :
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSub();
    };
  }, []);
  const authInfo = {
    user,
    loading,
    googleLogin,
    registerNewUser,
    loginOldUser,
    sendVerification,
    logoutUser,
    updateNameAndPhoto,
    resetPassword,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default Context;
