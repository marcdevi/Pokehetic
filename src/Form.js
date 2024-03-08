import React, { useState } from "react";

function Form(props) {
  const initialState = {
    name: "",
    type: ""
  };

  const [formData, setFormData] = useState(initialState);

  const submitForm = () => {
    props.handleSubmit(formData);
    setFormData(initialState);
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const { name, type } = formData;

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={handleChange}
      />
      <label htmlFor="type">Type</label>
      <input
        type="text"
        name="type"
        id="type"
        value={type}
        onChange={handleChange}
      />
      <input type="button" value="Submit" onClick={submitForm} />
    </form>
  );
}

export default Form;
