import React, { useState, useEffect } from "react";
import Axios from "axios";
//
import Header from "../components/Header";
import RegisterForm from "../components/RegisterForm";
import Pagination from "../components/Pagination";
import ReposTable from "../components/ReposTable";

const GitInnova = () => {
  const [isRegistring, setRegistring] = useState(false);

  const [candidate, setCandidate] = useState(undefined);
  const [candidateRepos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const reposPerPage = 5;

  useEffect(() => {
    let localCandidate = window.localStorage.getItem("candidate");
    if (localCandidate) {
      setCandidate(JSON.parse(localCandidate));
      getCandidateRepos(JSON.parse(localCandidate).github_user);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("hashchange", (e) => {
      const hash = e.currentTarget.location.hash;
      const page = parseInt(hash.match(/\d+/g)[0]);
      setPage(page);
    });
  });

  const onRegister = (candidate) => {
    window.localStorage.setItem("candidate", JSON.stringify(candidate));
    setCandidate(candidate);
    getCandidateRepos(candidate.github_user);
  };

  const getCandidateRepos = async (github_user) => {
    const res = await Axios.get(
      `https://api.github.com/users/${github_user}/repos`
    );
    setRepos(res.data);
  };

  return (
    <main className="container section">
      <Header
        candidate={candidate}
        isRegistring={isRegistring}
        setRegistring={setRegistring}
      />

      {isRegistring && <RegisterForm onRegister={onRegister} />}

      {candidateRepos.length > 0 ? (
        <div className="card-panel">
          <h5 className="center-align">Repositorios</h5>

          <Pagination
            reposLength={candidateRepos.length}
            reposPerPage={reposPerPage}
            currentPage={page}
          />

          <ReposTable
            candidateRepos={candidateRepos}
            reposPerPage={reposPerPage}
            currentPage={page}
          />
        </div>
      ) : (
        <h5 className="center-align">
          No se encontraron repositorios del candidato
        </h5>
      )}
    </main>
  );
};

export default GitInnova;
