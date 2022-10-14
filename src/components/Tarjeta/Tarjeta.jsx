import React, { useState, useEffect } from "react";
import "./Tarjeta.css";

const Tarjeta = ({ datos }) => {
  const [sexo, setSexo] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    if (datos) {
      if (datos.probability <= 0.7) {
        setSexo("El nombre es unisex");
        setColor("circulo3");
      } else {
        setSexo(datos.gender === "female" ? "Femenino" : "Masculino");
        setColor(datos.gender === "female" ? "circulo2" : "circulo");
      }
    }
  }, [datos]);

  return (
    <div>
      {datos && (
        <div className="rectangulo">
          {
            <div key={datos.receives}>
              {datos.name[0].toUpperCase() + datos.name.substring(1)} <br />
              Hay un {datos.probability * 100} % de probabilidad de que sea{" "}
              {sexo}
            </div>
          }
        </div>
      )}
      <div className={color}></div>
    </div>
  );
};

export default Tarjeta;
