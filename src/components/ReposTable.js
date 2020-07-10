import React, { useState, useEffect } from "react";

const ReposTable = ({ candidateRepos, reposPerPage, currentPage }) => {
  const reposFrom = reposPerPage * currentPage - reposPerPage;
  const reposTill = reposPerPage * currentPage;
  const limitedRepos = candidateRepos.slice(reposFrom, reposTill);

  return (
    <div className="row">
      <div className="col s12">
        <table className="responsive-table centered striped orange accent-1 card z-depth-3 blue-grey-text">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Lenguaje</th>
              <th>Branch por defecto</th>
              <th>url git</th>
              <th>Descripción</th>
            </tr>
          </thead>

          <tbody>
            {limitedRepos.map((repo, i) => {
              return (
                <tr key={i}>
                  <td>{repo.name}</td>
                  <td>{repo.language}</td>
                  <td>{repo.default_branch}</td>
                  <td>{repo.git_url}</td>
                  <td>{repo.description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReposTable;
