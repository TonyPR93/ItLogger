import React, { useState, useEffect } from "react";

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
    return <h4>Loading...</h4>;
  }
  return (
    <ul className="collection-with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs to show...</p>
      ) : (
        logs.map((log) => <li key={log.id}>{log.message}</li>) // Attention, doit avoir un key unique sinon erreur
      )}
    </ul>
  );
};
