import React from "react";

const Header = ({ candidate, isRegistring, setRegistring }) => {
  return (
    <div className="orange accent-1">
      <nav className="nav-extended orange  z-depth-2">
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo center">
            GitInnova
          </a>
        </div>
        <div className="nav-content center-align">
          <p className="flow-text">
            Obten información sobre repositorios de usuarios en Github
          </p>
        </div>

        <div className="card-panel" style={{ color: "#835632" }}>
          {candidate ? (
            <>
              <span className="chip">
                {candidate.first_name + " " + candidate.last_name}
              </span>

              <span className="chip">{candidate.cc}</span>
              <span className="chip">{candidate.birthday}</span>
              <span className="chip">{candidate.email}</span>
              <span className="chip">{candidate.github_user}</span>
            </>
          ) : (
            <h5>
              No has registrado ningún candidato. Presiona el botton de agregar
              y comencemos.
            </h5>
          )}
          <a
            href="#1"
            className="btn-floating right btn-large orange darken-4 waves-effect waves-light teal"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setRegistring(!isRegistring);
            }}
          >
            {isRegistring ? (
              <i className="material-icons">close</i>
            ) : (
              <i className="material-icons">add</i>
            )}
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
