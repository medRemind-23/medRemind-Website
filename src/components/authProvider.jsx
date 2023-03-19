import React, { createContext } from "react";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
export const AuthContext = createContext();
function AuthProvider({ children }) {
  const firebaseConfig = {
    apiKey: "AIzaSyDxH3SswlCvwgjaAHGaVLT7jEn6PZ6HCrQ",
    authDomain: "medremind-23.firebaseapp.com",
    projectId: "medremind-23",
    storageBucket: "medremind-23.appspot.com",
    messagingSenderId: "125022898851",
    appId: "1:125022898851:web:30c07ef6d0f14ec12ecd16",
    measurementId: "G-Z3C8F2S554",
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  const db = getFirestore(app);

  const FireBaseLogin = (Email, Password) => {
    signInWithEmailAndPassword(auth, Email, Password)
      .then((success) => {
        alert("success");
        console.log(success);
      })
      .catch((err) => {
        alert("invalid");
        console.log(err);
      });
  };

  const firebaseSignUp = (Email, password) => {
    createUserWithEmailAndPassword(auth, Email, password)
      .then(() => {
        console.log("successfull");
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const uid = user.uid;
            console.log(uid);
            const Detailref = doc(db, "Patient", uid);

            setDoc(Detailref, {
              email: Email,
            })
              .then(() => {
                alert("data added");
              })
              .catch((e) => {
                alert(e);
              });
          } else {
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getData = (id, Obj) => {
    console.log(id);
    console.log(Obj);
  };
  return (
    <AuthContext.Provider
      value={{
        FireBaseLogin,
        firebaseSignUp,
        getData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
