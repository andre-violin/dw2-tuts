import React from "react";

import { Container } from "./styles";

export default function Tutorial(props) {
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
    </Container>
  );
}
