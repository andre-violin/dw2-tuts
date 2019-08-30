import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";
import home from "../../assets/home.svg";
import signin from "../../assets/signin.svg";
import Tutorial from "../../components/Tutorial";

import data from "../../data/data.json";

export default function Home() {
  const [tutoriais, setTutoriais] = useState([]);

  useEffect(() => {
    setTutoriais(data);
    console.table(tutoriais);
  }, [tutoriais]);

  return (
    <Container>
      <header className="main-header">
        <h1>DW2 Tuts</h1>
      </header>

      <section>
        {tutoriais &&
          tutoriais.map(tutorial => (
            <Tutorial
              titulo={tutorial.titulo}
              autor={tutorial.autor}
              texto={tutorial.texto}
              entendi={tutorial.entendi}
              naoEntendi={tutorial.naoEntendi}
            />
          ))}
      </section>

      <nav>
        <Link className="link" to="/">
          <img src={home} alt="Home" />
          <p>home</p>
        </Link>
        <Link className="link" to="/login">
          <img src={signin} alt="Login" />
          <p>login</p>
        </Link>
      </nav>
    </Container>
  );
}
