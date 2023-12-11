import React, { useState } from "react";
import { connect } from "react-redux";
import { addLog } from "../../actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";

const AddLogModal = ({ addLog }) => {
  //La modal contiendra des states car elle ajoutera des log
  //Même s'il y'a Redux, ici on garde la state car elle est indépendante du Store (ce n'est pas la state du store)
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  const onSubmit = (e) => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter a message and tech" });
    } else {
      const NewLog = {
        message,
        attention,
        tech,
        date: new Date(),
      };

      addLog(NewLog);
      M.toast({ html: `Log added by ${tech}` });

      setMessage("");
      setAttention(false);
      setTech("");
    }
  };
  /**
   * La modal ne se voit pas elle est préreglé dans materialize, elle aparaitre quand on clique sur le bouton adequat (l'id de la DIV = id du button)
   *
   * Les valeurs du select sont hardcodé pour le moment
   *
   * le onChange de 'attention' permet de mettre la valeur opposé avec !attention vu qu'elle est true ou false
   */

  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter system log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Log message
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={(e) => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select tech
              </option>
              <option value="John Doe">John Doe</option>
              <option value="Sam Doe">Sam Doe</option>
              <option value="Troll Doe">Troll Doe</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue waves-loght btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%",
};

//Il n'est pas important d'importer la state ici, juste d'avoir le dispatch de addLog
export default connect(null, { addLog })(AddLogModal);
