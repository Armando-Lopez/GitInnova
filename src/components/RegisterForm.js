import React from "react";
import "materialize-css";

const RegisterForm = () => {
  return (
    <section className="center-align">
      <div className="row">
        <form className="col s12 card-panel">
          <h5>Registrar Candidato</h5>
          <div className="row">
            <div className="input-field col s6">
              <input id="first_name" type="text" className="validate" />
              <label htmlFor="first_name">Nombres</label>
            </div>

            <div className="input-field col s6">
              <input id="last_name" type="text" className="validate" />
              <label htmlFor="last_name">Apellidos</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input id="cc" type="number" className="validate" />
              <label htmlFor="cc">Cédula</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input id="birthday" type="date" className="validate" />
              <label htmlFor="birthday">Fecha de nacimiento</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate" />
              <label htmlFor="email">Correo electrónico</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input id="github-user" type="text" className="validate" />
              <label htmlFor="github-user">Usuario de GitHub</label>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegisterForm;
