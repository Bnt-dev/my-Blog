import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line import/no-unresolved
import ninjas from "@assets/data.json";
import "./AllNinja.css";

function AllNinja() {
  return (
    <section>
      <h1>My Ninja blog</h1>
      <div className="container-allcards">
        {ninjas.map((ninja) => (
          <div className="container-onecard" key={ninja.id}>
            <div className="background-onecard">
              <Link to={`/AllNinjas/${ninja.id}`}>
                <img
                  src={ninja.images[0]}
                  alt={ninja.name}
                  className="onecard-image"
                />
              </Link>
              <p className="onecard-name">{ninja.name} </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AllNinja;
