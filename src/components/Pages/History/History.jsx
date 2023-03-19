import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function History() {
  const [Data, setData] = useState([
    {
      name: "Alan",
      prescription: "ghasfdfashdjadh",
    },
    {
      name: "Joel",
      prescription: "ghasfdfashdjadh",
    },
    {
      name: "Danely",
      prescription: "ghasfdfashdjadh",
    },
    {
      name: "Cyril",
      prescription: "ghasfdfashdjadh",
    },
    {
      name: "Abin",
      prescription: "ghasfdfashdjadh",
    },
    {
      name: "Abin",
      prescription: "ghasfdfashdjadh",
    },
  ]);
  // const dataset = Data.map((data, index) => {
  //   console.log(data);
  return (
    <>
      <Row xs={1} md={3} className="g-1">
        {Data.map((data, index) => (
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>
                  <h1>{index + 1}</h1>
                </Card.Title>
                <Card.Text>
                  <h1>{data.name}</h1>
                  {data.prescription}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      ;
    </>
  );
  return dataset;
}

export default History;
