import React, { useState, useEffect } from "react";
import { LogItem } from "./LogItem";
import { Preloader } from "../layout/Preloader";

export const Logs = () => {
  const [logs, setLogs] = useState([]); // declaration de la state, son setter et ses valeurs initiales
  const [loading, setLoading] = useState([false]);

  useEffect(() => {
    // On utilise un UseEffect (il se lance dés le rendering de la page)
    getLogs();
    // eslint-disable-next-line
  }, []);

  const getLogs = async () => {
    setLoading(true);
    const res = await fetch("/logs"); //On fetch l'api, déclaré dnas le proxy de package.json
    const data = await res.json();

    setLogs(data); //On affecte les valeurs retourné
    setLoading(false);
  };

  if (loading) {
    return <Preloader />;
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs to show...</p>
      ) : (
        logs.map((log) => <LogItem log={log} key={log.id} />) // Attention, doit avoir un key unique sinon erreur
      )}
    </ul>
  );
};
