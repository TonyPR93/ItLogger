import React, { useEffect } from "react";
import { connect } from "react-redux"; //permet a redux d'interargir avec les components
import { LogItem } from "./LogItem";
import { Preloader } from "../layout/Preloader";
import { getLogs } from "../../actions/logActions";

const Logs = ({ log: { logs, loading }, getLogs }) => {
  /**
   * On en a plus besoin car la state est déclaré dans logReducer.js
   * qui est connecté au combineReducers dans reducers/index.js
   * qui est connecté au store src/store.js
   * et rendu disponible grace au Provider dans app.js
   */

  //  const [logs, setLogs] = useState([]); // declaration de la state, son setter et ses valeurs initiales
  //  const [loading, setLoading] = useState([false]);
  console.log(logs);
  useEffect(() => {
    // On utilise un UseEffect (il se lance dés le rendering de la page)
    getLogs();
    // eslint-disable-next-line
  }, []);

  /**
   *
   * Plus besoin, car executé dans logActions.js (Reducer)
   *
   */

  // const getLogs = async () => {
  //   setLoading(true);
  //   const res = await fetch("/logs"); //On fetch l'api, déclaré dnas le proxy de package.json
  //   const data = await res.json();

  //   setLogs(data); //On affecte les valeurs retourné
  //   setLoading(false);
  // };

  if (loading || logs === null) {
    return <Preloader />;
  }
  console.log();
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

const mapStateToProps = (state) => ({
  log: state.log,
});

export default connect(mapStateToProps, { getLogs })(Logs);
