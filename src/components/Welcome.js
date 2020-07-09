import React, { useEffect, useState } from "react";

const Welcome = () => {
  return (
    <nav className="nav-extended">
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo center">
          GitInnova
        </a>
      </div>
      <div className="nav-content">
        <span className="nav-title"></span>
        <a className="btn-floating btn-large halfway-fab waves-effect waves-light teal">
          <i className="material-icons">add</i>
        </a>
      </div>
    </nav>
  );
};

export default Welcome;
