import React, { useState, useEffect } from "react";

import api from "../../services/api";
import { Container } from "./styles";
import Tutorial from "../../components/Tutorial";

export default function Home() {
  const [tutoriais, setTutoriais] = useState([]);

  useEffect(() => {
    async function loadTutorias() {
      const response = await api.get("/tutorial");
      setTutoriais(response.data);
    }
    loadTutorias();
  }, [tutoriais]);

  return (
    <Container>
      <header className="main-header">
        <h1>DW2 Tuts</h1>
      </header>

      <div className="main">
        <section>
          {tutoriais &&
            tutoriais.map(tutorial => (
              <Tutorial
                key={tutorial._id}
                titulo={tutorial.titulo}
                autor={tutorial.autor}
                texto={tutorial.conteudo}
                entendi={tutorial.entendi}
                naoEntendi={tutorial.naoEntendi}
              />
            ))}
        </section>
      </div>
    </Container>
  );
}
