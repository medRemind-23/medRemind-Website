import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { getFirestore, setDoc, doc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { app } from "../Login/Login";

const db = getFirestore(app);
const auth = getAuth();

function SignUp() {
  const Email = useRef();
  const Password = useRef();

  const firebaseSignUp = (e) => {
    e.preventDefault();
    let data = {
      email: Email.current.value,
      pswd: Password.current.value,
    };
    createUserWithEmailAndPassword(auth, data.email, data.pswd)
      .then(() => {
        console.log("successfull");
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const uid = user.uid;
            console.log(uid);
            const Detailref = doc(db, "Patient", uid);

            const email = Email.current.value;

            setDoc(Detailref, {
              Email: email,
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
  return (
    <>
      <div className="main-container ">
        <h1>Signup</h1>
        <Form
          className=" h-100 d-flex justify-content-center align-items-center Login_form"
          onSubmit={firebaseSignUp}
        >
          <div className="form-items">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                ref={Email}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                ref={Password}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default SignUp;
