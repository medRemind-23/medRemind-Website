import React, { useRef, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AuthProvider, { AuthContext } from "../../authProvider";
import "./Login.css";

function Login() {
  const { FireBaseLogin } = useContext(AuthContext);
  const Email = useRef();
  const Password = useRef();
  const logIn = (e) => {
    e.preventDefault();
    FireBaseLogin(Email.current.value, Password.current.value);
  };
  return (
    <>
      <div className="main-container ">
        <h1>Login</h1>
        <Form
          className=" h-100 d-flex justify-content-center align-items-center Login_form"
          onSubmit={logIn }
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
