import React, { useRef, useContext } from "react";
import "./Entry.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import FormGroup from "react-bootstrap/esm/FormGroup";
import { MdDeleteOutline } from "react-icons/md";
import AuthProvider, { AuthContext } from "../../authProvider";

function Entry() {
  const { getData } = useContext(AuthContext);
  const Name = useRef();
  const id = useRef();

  const pre1 = useRef();
  const duration1 = useRef();
  const time1 = useRef();

  const pre2 = useRef(null);
  const duration2 = useRef(null);
  const time2 = useRef(null);

  const pre5 = useRef(null);
  const duration5 = useRef(null);
  const time5 = useRef(null);

  const pre3 = useRef(null);
  const duration3 = useRef(null);
  const time3 = useRef(null);

  const pre4 = useRef(null);
  const duration4 = useRef(null);
  const time4 = useRef(null);

  const submit = (e) => {
    e.preventDefault();
    const obj = [
      {
        prescription: pre1.current.value,
        duration: duration1.current.value,
        time: time1.current.value,
      },
      {
        prescription: pre2.current.value,
        duration: duration2.current.value,
        time: time2.current.value,
      },
      {
        prescription: pre3.current.value,
        duration: duration3.current.value,
        time: time3.current.value,
      },
      {
        prescription: pre4.current.value,
        duration: duration4.current.value,
        time: time4.current.value,
      },
      {
        prescription: pre5.current.value,
        duration: duration5.current.value,
        time: time5.current.value,
      },
    ];
    getData(id.current.value, obj);
  };

  const addFields = (e) => {
    e.preventDefault();
    let obj = {
      prescription: "",
      duration: "",
      time: "",
    };

    setFormFields([...formFields, obj]);
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
            <Form.Control
              type="text"
              placeholder="Enter Your Name"
              ref={Name}
            />
          </Form.Group>
          <Form.Group className="Pateient-detail-name" controlId="">
            <Form.Control type="text" placeholder="Enter Your Id" ref={id} />
          </Form.Group>
        </div>

        <>
          <Form
            style={{ marginTop: "20px" }}
            className="Pateient-medicine-detail"
          >
            <FormGroup>
              <Form.Control placeholder="Prescription" ref={pre1} />
            </FormGroup>
            <FormGroup>
              <Form.Control placeholder="Duration" ref={duration1} />
            </FormGroup>
            <FormGroup>
              <Form.Control placeholder="Time" ref={time1} />
            </FormGroup>
            <br />
            <Button
              className="Remove-button"
              // style={{ marginTop: "10px" }}
            >
              <MdDeleteOutline />
            </Button>
          </Form>
          <Form
            style={{ marginTop: "20px" }}
            className="Pateient-medicine-detail"
          >
            <FormGroup>
              <Form.Control placeholder="Prescription" ref={pre2} />
            </FormGroup>
            <FormGroup>
              <Form.Control placeholder="Duration" ref={duration2} />
            </FormGroup>
            <FormGroup>
              <Form.Control placeholder="Time" ref={time2} />
            </FormGroup>
            <br />
            <Button
              className="Remove-button"
              // style={{ marginTop: "10px" }}
            >
              <MdDeleteOutline />
            </Button>
          </Form>
          <Form
            style={{ marginTop: "20px" }}
            className="Pateient-medicine-detail"
          >
            <FormGroup>
              <Form.Control placeholder="Prescription" ref={pre3} />
            </FormGroup>
            <FormGroup>
              <Form.Control placeholder="Duration" ref={duration3} />
            </FormGroup>
            <FormGroup>
              <Form.Control placeholder="Time" ref={time3} />
            </FormGroup>
            <br />
            <Button
              className="Remove-button"
              // style={{ marginTop: "10px" }}
            >
              <MdDeleteOutline />
            </Button>
          </Form>
          <Form
            style={{ marginTop: "20px" }}
            className="Pateient-medicine-detail"
          >
            <FormGroup>
              <Form.Control placeholder="Prescription" ref={pre4} />
            </FormGroup>
            <FormGroup>
              <Form.Control placeholder="Duration" ref={duration4} />
            </FormGroup>
            <FormGroup>
              <Form.Control placeholder="Time" ref={time4} />
            </FormGroup>
            <br />
            <Button
              className="Remove-button"
              // style={{ marginTop: "10px" }}
            >
              <MdDeleteOutline />
            </Button>
          </Form>
          <Form
            style={{ marginTop: "20px" }}
            className="Pateient-medicine-detail"
          >
            <FormGroup>
              <Form.Control placeholder="Prescription" ref={pre5} />
            </FormGroup>
            <FormGroup>
              <Form.Control placeholder="Duration" ref={duration5} />
            </FormGroup>
            <FormGroup>
              <Form.Control placeholder="Time" ref={time5} />
            </FormGroup>
            <br />
            <Button
              className="Remove-button"
              // style={{ marginTop: "10px" }}
            >
              <MdDeleteOutline />
            </Button>
          </Form>
        </>
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
