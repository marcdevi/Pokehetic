import React, { useState } from "react";
import Table from "./Table";
import Form from "./Form";
import Pokeapi from "./Pokeapi";

function Test() {
  const [dataToPass, setDataToPass] = useState([
    {
      name: "Hey",
      type: "I'm here"
    },
    {
      name: "Because",
      type: "These Data"
    },
    {
      name: "Where passed",
      type: "From my parent"
    }
  ]);

  const removeRow = (index) => {
    setDataToPass((prevData) =>
      prevData.filter((currentData, i) => i !== index)
    );
  };

  const handleSubmit = (currentRow) => {
    setDataToPass((prevData) => [...prevData, currentRow]);
  };

  return (
    <div className="Test">
      <h1>Saucisse</h1>
      <Table tableContent={dataToPass} removeRow={removeRow} />
      <Form handleSubmit={handleSubmit} />
      <Pokeapi />
    </div>
  );
}

export default Test;
