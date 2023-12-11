import "./App.css";
import { SearchBar } from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs"; //Ici c'est un export default, du coup pas de {}, difference ?
import { AddBtn } from "./components/layout/AddBtn";
import { AddLogModal } from "./components/logs/AddLogModal";
import { EditLogModal } from "./components/logs/EditLogModal";
import { AddTechModal } from "./components/techs/AddTechModel";
import { TechListModal } from "./components/techs/TechListModal";
import { Fragment, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
const App = () => {
  useEffect(() => {
    //Initialize materialize javascript
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
