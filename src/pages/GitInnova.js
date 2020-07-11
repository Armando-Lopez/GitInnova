import React, { useState, useEffect } from "react";
import Axios from "axios";
//
import Header from "../components/Header";
import RegisterForm from "../components/RegisterForm";
import Pagination from "../components/Pagination";
import ReposTable from "../components/ReposTable";
import Sorter from "../components/Sorter";
import Search from "../components/Search";

const GitInnova = () => {
  const [isRegistring, setRegistring] = useState(false);

  const [candidate, setCandidate] = useState(undefined);
  const [hasRepos, setHasRepos] = useState(false);
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
    const localrepos = window.localStorage.getItem("localrepos");

    if (localrepos) {
      setRepos(JSON.parse(localrepos));
      console.log("local");
    } else {
      console.log("API");
      const res = await Axios.get(
        `https://api.github.com/users/${github_user}/repos`
      );

      if (res.data) {
        console.log("data");
        const filteredFromApi = res.data.map((repo) => {
          return {
            name: repo.name,
            language: repo.language,
            default_branch: repo.default_branch,
            git_url: repo.git_url,
            description: repo.description,
          };
        });

        setRepos(filteredFromApi);
        window.localStorage.setItem(
          "localrepos",
          JSON.stringify(filteredFromApi)
        );
        setHasRepos(true);
      }
    }

    setRegistring(false);
  };

  const sort = (e) => {
    const value = e.target.value.toLowerCase().trim();

    const localrepos = JSON.parse(window.localStorage.getItem("localrepos"));

    if (localrepos) {
      const sorted = localrepos.sort((a, b) => {
        if (!a[value] || !b[value]) {
          return 0;
        }
        let A = a[value].toLowerCase();
        let B = b[value].toLowerCase();

        if (A < B) {
          return -1;
        }
        if (A > B) {
          return 1;
        }
        return 0;
      });

      setRepos(sorted);
    }
  };

  const search = (e) => {
    const value = e.target.value.toLowerCase().trim();
    const localrepos = JSON.parse(window.localStorage.getItem("localrepos"));
    if (value.length >= 3) {
      const found = localrepos.filter((repo) =>
        repo.name.toLowerCase().includes(value)
      );

      setRepos(found);
    } else {
      setRepos(localrepos);
    }
  };

  return (
    <main className="container section">
      <Header
        candidate={candidate}
        isRegistring={isRegistring}
        setRegistring={setRegistring}
      />

      {isRegistring && <RegisterForm onRegister={onRegister} />}

      <div className="card-panel row">
        <div className="col s12">
          <h5 className="center-align">Repositorios</h5>
        </div>

        {hasRepos ? (
          <>
            <div className="col s6">
              <Sorter onSort={sort} />
            </div>

            <div className="col s6">
              <Search onSearch={search} />
            </div>

            <div className="col s12">
              <Pagination
                reposLength={candidateRepos.length}
                reposPerPage={reposPerPage}
                currentPage={page}
              />
            </div>
          </>
        ) : candidate ? (
          <h6 className="center-align">
            No se contraron Repositorios del candidato ingresado
          </h6>
        ) : (
          <h6 className="center-align">
            Registra candidato para ver Repositorios
          </h6>
        )}

        <div className="col s12">
          <ReposTable
            candidateRepos={candidateRepos}
            reposPerPage={reposPerPage}
            currentPage={page}
          />
        </div>
      </div>
    </main>
  );
};

export default GitInnova;
