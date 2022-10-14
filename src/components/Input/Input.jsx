import React from "react";
import "./Input.css";
const Input = ({ handleChange }) => {
  return (
    <div>
      <label>Ingrese Nombre</label>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default Input;
