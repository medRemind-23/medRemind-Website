import React from "react";
import "./Entry.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { useState } from "react";
function Entry() {
  const [formFields, setFormFields] = useState([{ name: "", age: "" }]);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(formFields);
  };

  const addFields = (e) => {
    e.preventDefault();
    let object = {
      prescription: "",
      quantity: "",
    };

    setFormFields([...formFields, object]);
  };

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };

  return (
    <Col className="p-2" lg={4}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Name" />
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Male" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Female" />
          </Form.Group>
          <Form.Label>Age</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Age" />
        </Form.Group>
        <Form onSubmit={submit} className="Entry-form">
          {formFields.map((form, index) => {
            return (
              <Form key={index} className="Entry-form">
                <Form.Label style={{ marginTop: "20px" }}>
                  Prescription
                </Form.Label>
                <Form.Control
                  placeholder="Prescription"
                  onChange={(event) => handleFormChange(event, index)}
                  value={form.prescription}
                />
                <Form.Label> Quantity</Form.Label>
                <Form.Control
                  placeholder="quantity"
                  onChange={(event) => handleFormChange(event, index)}
                  value={form.quantity}
                />
                <br />
                <Button onClick={() => removeFields(index)} clas>
                  Remove
                </Button>
                <th />
                <Button onClick={addFields}>Add More..</Button>
                <br />
              </Form>
            );
          })}
        </Form>
        <br />
        <Button variant="primary" type="submit" onClick={submit}>
          Submit
        </Button>
      </Form>
    </Col>
  );
}

export default Entry;
