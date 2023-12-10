import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

export const EditLogModal = () => {
  //La modal contiendra des states car elle ajoutera des log
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  const onSubmit = (e) => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter a message and tech" });
    } else {
      console.log(message, tech, attention);
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
    <div id="edit-log-modal" className="modal" style={modalStyle}>
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
