import React, { useEffect } from "react";
import M from "materialize-css";

const Sorter = ({ onSort }) => {
  useEffect(() => {
    const elem = document.querySelectorAll("select");
    M.FormSelect.init(elem);
  });

  return (
    <div className="input-field">
      <select onChange={onSort}>
        <option value="name" defaultValue>
          Nombre
        </option>
        <option value="language">Lenguaje</option>
        <option value="default_branch">Branch por defecto</option>
        <option value="git_url">Url Git</option>
        <option value="description">descripción</option>
      </select>
      <label>Ordenar por...</label>
    </div>
  );
};

export default Sorter;
