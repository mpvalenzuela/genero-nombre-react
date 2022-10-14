import React, { useState, useEffect } from "react";
import Tarjeta from "../Tarjeta/Tarjeta";
import Boton from "../Boton/Boton";
import Input from "../Input/Input";
import axios from "axios";
import "./Pagina.css";

const Pagina = ({ titulo }) => {
  const [names, setNames] = useState(null);
  const [receives, setReceives] = useState("");
  const [desactivado, isDesactivado] = useState(true);

  useEffect(() => {
    if (receives) {
      isDesactivado(false);
    } else {
      isDesactivado(true);
    }
  }, [receives]);

  const getNames = async () => {
    await axios
      .get(`https://api.genderize.io/?name=${receives}`)
      .then((response) => {
        setNames(response.data);
      });
  };

  const deleteName = () => {
    setNames(null);
  };

  const searchName = () => {
    getNames();
  };

  const handleChange = (e) => {
    setReceives(e.target.value);
  };

  return (
    <>
      <h1>{titulo}</h1>
      <Tarjeta datos={names} />
      <br />
      <Boton nameButton="buscar" onClick={searchName} disabled={desactivado} />
      <Boton onClick={deleteName} disabled={desactivado} />
      <Input handleChange={handleChange} value={receives} />
    </>
  );
};

export default Pagina;
