import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxH3SswlCvwgjaAHGaVLT7jEn6PZ6HCrQ",
  authDomain: "medremind-23.firebaseapp.com",
  projectId: "medremind-23",
  storageBucket: "medremind-23.appspot.com",
  messagingSenderId: "125022898851",
  appId: "1:125022898851:web:30c07ef6d0f14ec12ecd16",
  measurementId: "G-Z3C8F2S554",
};

export const app = initializeApp(firebaseConfig);
const auth = getAuth();

function Login() {
  const Email = useRef();
  const Password = useRef();

  const FireBaseLogin = (e) => {
    e.preventDefault();
    let data = {
      email: Email.current.value,
      pswd: Password.current.value,
    };
    signInWithEmailAndPassword(auth, data.email, data.pswd)
      .then((success) => {
        alert("success");
        console.log(success);
        window.location.replace("userprofile.html");
      })
      .catch((err) => {
        alert("invalid");
        console.log(err);
      });
  };
  return (
    <>
      <div className="main-container ">
        <h1>Login</h1>
        <Form
          className=" h-100 d-flex justify-content-center align-items-center Login_form"
          onSubmit={FireBaseLogin}
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

export default Login;
