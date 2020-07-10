import React from "react";

const Search = ({ onSearch }) => {
  return (
    <div className="input-field">
      <input
        id="reponame"
        type="text"
        className="validate"
        onChange={onSearch}
      />
      <label className="active" htmlFor="reponame">
        Busca repositorios
      </label>
    </div>
  );
};

export default Search;
