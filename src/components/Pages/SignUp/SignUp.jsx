import React, { useRef, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../../authProvider";

function SignUp() {
  const { firebaseSignUp } = useContext(AuthContext);
  const Email = useRef();
  const Password = useRef();
  const signUp = (e) => {
    const email = Email.current.value;
    const password = Email.current.value;
    e.preventDefault();
    firebaseSignUp(email, password);
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
