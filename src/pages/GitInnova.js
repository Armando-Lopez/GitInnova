import React, { useState, useEffect } from "react";
import RegisterForm from "../components/RegisterForm";
import Header from "../components/Header";
import "materialize-css";

const GitInnova = () => {
  const [candidate, setCandidate] = useState(undefined);

  useEffect(() => {
    let localCandidate = window.localStorage.getItem("candidate");
    if (localCandidate) {
      setCandidate(JSON.parse(localCandidate));
    }
  }, []);

  const onRegister = (candidate) => {
    window.localStorage.setItem("candidate", JSON.stringify(candidate));
    setCandidate(candidate);
  };

  return (
    <main className="container section">
      <Header candidate={candidate} />
      <RegisterForm onRegister={onRegister} />
    </main>
  );
};

export default GitInnova;
