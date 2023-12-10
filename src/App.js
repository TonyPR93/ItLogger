import "./App.css";

import { useEffect } from "react";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
const App = () => {
  useEffect(() => {
    //Initialize materialize javascript
    M.AutoInit();
  });

  return <div className="App">My app</div>;
};

export default App;
