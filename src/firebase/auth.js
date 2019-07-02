import { auth } from "./firebase";

// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

// Sign out
export const doSignOut = () => auth.signOut();

// Password Reset
export const doPasswordReset = (email, actionCodeSettings) =>
  auth.sendPasswordResetEmail(email, actionCodeSettings);

// Password Change
export const doPasswordUpdate = password =>
  auth.currentUser.updatePassword(password);

// Get Token
export const doGetIdToken = () => 
  auth.currentUser.getIdToken();

// Get Token
export const doGetUserByID = (uid) => 
  auth.getUser(uid);

// Auth check
export const authCheck = () =>
  new Promise((resolve, reject) => {
    auth.onAuthStateChanged(user => {
      if (user) {
        resolve(user.uid);
      }
      reject(new Error("Please sign in."));
    });
  });

export const getCurrentUser = () =>
  new Promise((resolve, reject) => {
    auth.onAuthStateChanged(user => {
      if (user) {
        resolve(user);
      }
      reject(new Error("Please sign in."));
    });
  });

// Check if user exitsts; returns array of 
// Sign in methods; Empty array means user
// Does not exist
export const signInMethodsForEmail = email =>
  auth.fetchSignInMethodsForEmail(email);
