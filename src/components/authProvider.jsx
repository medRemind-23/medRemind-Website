import React, { createContext } from "react";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { getFirestore, setDoc, doc, getDoc } from "firebase/firestore";
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
            let id = 1000;
            console.log(uid);
            const Detailref = doc(db, "Patient", uid);
            const prescriptionDetails = doc(db, "mapping", id.toString());
            console.log(prescriptionDetails);
            setDoc(Detailref, {
              email: Email,
            })
              .then(() => {
                // alert("data added");
                setDoc(prescriptionDetails, {
                  userid: uid,
                })
                  .then(() => {
                    alert("data adds");
                  })
                  .catch((e) => {
                    alert(e);
                  });
              })
              .catch((e) => {
                alert(e);
              });
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getData = (id, Obj) => {
    // console.log(id);
    // console.log(Obj);
    const DocRef = doc(db, "mapping", id);
    const DocSnaps = getDoc(DocRef)
      .then((res) => {
        console.log("data is   :", res.data().userid);
        const uid = res.data().userid;
        const PatientRef = doc(db, "Patient", uid);
        const patientData = getDoc(PatientRef).then((Val) => {
          console.log(Val.data());
          const DataPut = doc(db, "Patient", uid);
          console.log(values);
          setDoc(DataPut, {
            Email: Val.data().Email,
            Medicalinfo: Obj,
          })
            .then(() => {
              console.log("Data added");
            })
            .catch((e) => console.log(e));
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const SignOut = () => {
    signOut(auth)
      .then(() => console.log("logout  successfull!"))
      .catch((e) => console.log(e));
  };
  const change = () => {
    onAuthStateChanged(auth, (user) => {
      return user;
    });
  };
  return (
    <AuthContext.Provider
      value={{
        FireBaseLogin,
        firebaseSignUp,
        getData,
        SignOut,
        auth,
        change,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
