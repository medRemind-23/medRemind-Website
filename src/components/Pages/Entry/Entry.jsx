import React from "react";
import "./Entry.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import FormGroup from "react-bootstrap/esm/FormGroup";
import { MdDeleteOutline } from "react-icons/md";

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
      duration: "",
      time: "",
    };

    setFormFields([...formFields, object]);
  };

  const removeFields = (index) => {
    const len = formFields.length;
    if (len > 1) {
      let data = [...formFields];
      data.splice(index, 1);
      setFormFields(data);
    }
  };

  return (
    <Col className="form-input p-2">
      <div className="Pateient-detail">
        <div className="Pateient-detail-1">
          <Form.Group className="Pateient-detail-name" controlId="">
            <Form.Control type="text" placeholder="Enter Your Name" />
          </Form.Group>
          <Form.Group className="Pateient-detail-name" controlId="">
            <Form.Control type="text" placeholder="Enter Your Name" />
          </Form.Group>
        </div>

        {formFields.map((form, index) => {
          return (
            <Form
              key={index}
              style={{ marginTop: "20px" }}
              className="Pateient-medicine-detail"
            >
              <FormGroup>
                <Form.Control
                  placeholder="Prescription"
                  onChange={(event) => handleFormChange(event, index)}
                  value={form.prescription}
                />
              </FormGroup>
              <FormGroup>
                <Form.Control
                  placeholder="Duration"
                  onChange={(event) => handleFormChange(event, index)}
                  value={form.duration}
                />
              </FormGroup>
              <FormGroup>
                <Form.Control
                  placeholder="Time"
                  onChange={(event) => handleFormChange(event, index)}
                  value={form.time}
                />
              </FormGroup>
              <br />
              <Button
                onClick={() => removeFields(index)}
                className="Remove-button"
                // style={{ marginTop: "10px" }}
              >
                <MdDeleteOutline />
              </Button>
            </Form>
          );
        })}
        <div
          className="Entry-button"
          style={{ marginTop: "20px", color: "#fff" }}
        >
          <Button
            variant="primary"
            type="submit"
            onClick={submit}
            className="submit-button"
          >
            Submit
          </Button>
          <Button onClick={addFields}>Add More..</Button>
        </div>

        <br />
      </div>
    </Col>
  );
}

export default Entry;
