import React from "react";
import "../Styles/Entry.css";
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

  const removeFields = (index, e) => {
    e.preventDefault();
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

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Prescription</Form.Label>
          <div className="App">
            <form onSubmit={submit}>
              {formFields.map((form, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      gap: "2em",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <input
                      name="Prescription"
                      placeholder="Prescription"
                      onChange={(event) => handleFormChange(event, index)}
                      value={form.prescription}
                      style={{ borderRadius: "5px" }}
                    />
                    <input
                      name="quantity"
                      placeholder="quantity"
                      onChange={(event) => handleFormChange(event, index)}
                      value={form.quantity}
                      style={{ borderRadius: "5px" }}
                    />
                    <button onClick={() => removeFields(index)}>Remove</button>
                  </div>
                );
              })}
            </form>
            <button onClick={addFields}>Add More..</button>
            <br />
          </div>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={submit}>
          Submit
        </Button>
      </Form>
    </Col>
  );
}

export default Entry;
