import React from "react";
import "./Boton.css";

const Boton = ({ onClick, nameButton = "Eliminar", disabled }) => {
  let clase = "buscar";
  if (nameButton === "Eliminar") {
    clase = "eliminar";
  } else {
    clase = "buscar";
  }
  return (
    <button className={clase} disabled={disabled} onClick={() => onClick()}>
      {" "}
      {nameButton}
    </button>
  );
};

export default Boton;
