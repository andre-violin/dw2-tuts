import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";
import home from "../../assets/home.svg";
import signin from "../../assets/signin.svg";

export default function Nav() {
  return (
    <Container>
      <Link className="link" to="/">
        <img src={home} alt="Home" />
        <p>home</p>
      </Link>
      <Link className="link" to="/addtutorial">
        <img src={signin} alt="Adicionar um tutorial" />
        <p>+ tutorial</p>
      </Link>
    </Container>
  );
}
