import React, { useState, useEffect } from "react";
import { TechItem } from "./TechItem";

export const TechListModal = () => {
  const [techs, setTechs] = useState([]); // declaration de la state, son setter et ses valeurs initiales
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // On utilise un UseEffect (il se lance dés le rendering de la page)
    getTechs();
    // eslint-disable-next-line
  }, []);

  const getTechs = async () => {
    setLoading(true);
    const res = await fetch("/techs"); //On fetch l'api, déclaré dnas le proxy de package.json
    const data = await res.json();

    setTechs(data); //On affecte les valeurs retourné
    setLoading(false);
  };

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Techs List</h4>
        <ul className="collection">
          {!loading &&
            techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};
