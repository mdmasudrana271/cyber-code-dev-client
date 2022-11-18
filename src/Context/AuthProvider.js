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
import app from "../firebase/firebase.config";

export const ThemeContext = createContext();

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  // theme toggle state
  const [theme, setTheme] = useState("light");

  // toggle theme

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  const [user, setUser] = useState({});

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // google signin popup

  const googleSignIn = (googleProvider) => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // github signin popup

  const githubSignIn = (githubProvider) => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  // create user function

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user profile update function

  const updateUserProfile = (profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  };

  // login with exsiting user info

  const loginWithEmailAndPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout function

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // email varification function

  const varifyEmailAddress = () => {
    return sendEmailVerification(auth.currentUser);
  };

  // password reset function

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // set user info on auth

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    googleSignIn,
    githubSignIn,
    createUser,
    loginWithEmailAndPassword,
    updateUserProfile,
    user,
    logOut,
    varifyEmailAddress,
    loading,
    resetPassword,
    error,
    setError,
  };

  const themeInfo = {
    theme,
    setTheme,
    toggleTheme,
  };
  return (
    <AuthContext.Provider value={authInfo}>
      <ThemeContext.Provider value={themeInfo}>
        {children}
      </ThemeContext.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
