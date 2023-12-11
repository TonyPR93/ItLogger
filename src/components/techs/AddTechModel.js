import React, { useState } from "react";
import { connect } from "react-redux";
import { addTechs } from "../../actions/techActions";
import M from "materialize-css/dist/js/materialize.min.js";

const AddTechModal = ({ addTechs }) => {
  //La modal contiendra des states car elle ajoutera des log
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = (e) => {
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Please enter a firstname and lastname" });
    } else {
      addTechs({
        firstName,
        lastName,
      });
      M.toast({ html: `${firstName} ${lastName} added as a tech` });
      setFirstName("");
      setLastName("");
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
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>New tech</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="lastName" className="active">
              Last Name
            </label>
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

export default connect(null, { addTechs })(AddTechModal);
