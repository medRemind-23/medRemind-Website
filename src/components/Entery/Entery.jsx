import React, { useState } from "react";

function Entery() {
  const [Data, setData] = useState([
    {
      name: "Alan",
      prescription: "jvvnzvncnvznvSFfdgfhnsbmnbxmB",
    },
    {
      name: "joel",
      prescription: "jvvnzvncnvznvSFfdgfhnsbmnbxmB",
    },
    {
      name: "cyril",
      prescription: "jvvnzvncnvznvSFfdgfhnsbmnbxmB",
    },
    {
      name: "Danely",
      prescription: "jvvnzvncnvznvSFfdgfhnsbmnbxmB",
    },
  ]);
  Data.map((data) => {
    console.log(data);
    return <h1>data.name</h1>;
  });
}

export default Entery;
