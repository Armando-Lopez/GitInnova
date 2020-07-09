import React, { useEffect, useState } from "react";

const Header = ({ candidate }) => {
  return (
    <div className="orange accent-1">
      <nav className="nav-extended orange  z-depth-2">
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo center">
            GitInnova
          </a>
        </div>
        <div className="nav-content">
          <p className="flow-text">Obten información de usuarios de Github</p>
        </div>

        <div className="card-panel blue-grey-text darken-4">
          {candidate ? (
            <>
              <ul className="collection with-header">
                <li className="collection-header">
                  <h5>{candidate.first_name + " " + candidate.last_name}</h5>
                </li>
                <br />
                <li className="collection-item chip">{candidate.cc}</li>
                <li className="collection-item chip">{candidate.birthday}</li>
                <li className="collection-item chip">{candidate.email}</li>
                <li className="collection-item chip">
                  {candidate.github_user}
                </li>
              </ul>
            </>
          ) : (
            <h5>
              No has registraso ningun candidato. Presiona el botton de agregar
              y comencemos
            </h5>
          )}
          <a className="btn-floating right btn-large orange darken-4 waves-effect waves-light teal">
            <i className="material-icons">add</i>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
