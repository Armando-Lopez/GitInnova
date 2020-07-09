import React, { useEffect, useState } from "react";

const Header = () => {
  return (
    <div className="orange accent-1">
      <nav className="nav-extended orange  z-depth-2">
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo center">
            GitInnova
          </a>
        </div>
        <div className="nav-content">
          <a className="btn-floating btn-large halfway-fab orange darken-4 waves-effect waves-light teal">
            <i className="material-icons">add</i>
          </a>
        </div>
      </nav>

      <ul class="collection with-header black-text card-panel">
        <li className="collection-header">
          <h5>Diego Lopez</h5>
        </li>
        <li class="collection-item chip">1028041148</li>
        <li class="collection-item chip">31-08-1999</li>
        <li class="collection-item chip">lopexdiego5@gmail.com</li>
        <li class="collection-item chip">armando-lopez</li>
      </ul>
    </div>
  );
};

export default Header;
