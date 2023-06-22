import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import ninjas from "../assets/data.json";
import "./OneNinja.css";

function OneNinja() {
  const { id: idNinja } = useParams();

  const ninja = useMemo(
    () => ninjas.find((ninjaFind) => ninjaFind.id === +idNinja),
    [idNinja]
  );

  return (
    <section>
      <h1>{ninja.name}</h1>
      <div className="oneninja-detail">
        <div>
          <img src={ninja.images[0]} alt={ninja.about[0]} />
          <p className="bold">Poste : {ninja.info.Ocupação}</p>
          <p className="bold">Rang : {ninja.info.PatenteNinja}</p>
        </div>
        <div>
          <p className="oneninja-text">Village : {ninja.info.Afiliação}</p>
          <p>{ninja.about[1]}</p>
        </div>
      </div>
    </section>
  );
}

export default OneNinja;
