import React, { useState } from "react";

import { Container } from "./styles";

export default function Tutorial(props) {
  const [entendi, setEntendi] = useState(props.entendi || 0);
  const [naoEntendi, setNaoEntendi] = useState(props.naoEntendi || 0);

  function handleEntendi() {
    setEntendi(entendi + 1);
  }

  return (
    <Container>
      <header>
        <h2>{props.titulo}</h2>
        <p>
          Autor: <span>{props.autor}</span>
        </p>
      </header>
      <div>
        <p>{props.texto}</p>
      </div>
      <div>
        <button type="button" onClick={handleEntendi}>
          Entendi ({entendi})
        </button>
        <button type="button" onClick={() => setNaoEntendi(naoEntendi + 1)}>
          Não Entendi ({naoEntendi})
        </button>
      </div>
    </Container>
  );
}
