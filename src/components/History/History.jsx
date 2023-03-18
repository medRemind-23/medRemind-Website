import React, { useState } from "react";

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
  ]);
  const dataset = Data.map((data) => {
    console.log(data);
    return (
      <>
        <h1>{data.name}</h1>
        <p>{data.prescription}</p>
      </>
    );
  });
  return dataset;
}

export default History;
