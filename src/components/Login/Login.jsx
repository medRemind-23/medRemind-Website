import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./Login.css";

function Login() {
  return (
    <>
      <div className="main-container h-100 d-flex justify-content-center align-items-center">
        <Form class=" h-100 d-flex justify-content-center align-items-center">
          <div className="form-items">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Button variant="primary" type="submit" className="btn btn-primary">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default Login;