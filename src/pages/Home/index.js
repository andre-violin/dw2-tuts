import React from "react";

import { Container } from "./styles";
import home from "../../assets/home.svg";
import signin from "../../assets/signin.svg";
import Tutorial from "../../components/Tutorial";

export default function Home() {
  return (
    <Container>
      <header className="main-header">
        <h1>DW2 Tuts</h1>
      </header>

      <section>
        <Tutorial
          titulo="Introdução ao JavaScript"
          autor="Nome do Autor"
          texto="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
          iste neque aliquid maxime ex rem, ipsa quaerat saepe deleniti quisquam
          quos blanditiis cupiditate magni vel. Dolorem accusamus soluta dolore
          eos."
        />

        <Tutorial
          titulo="JavaScript Avançado"
          autor="André L. Violin"
          texto="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
          iste neque aliquid maxime ex rem, ipsa quaerat saepe deleniti quisquam
          quos blanditiis cupiditate magni vel. Dolorem accusamus soluta dolore
          eos."
        />
      </section>

      <nav>
        <div>
          <img src={home} alt="Home" />
          <p>home</p>
        </div>
        <div>
          <img src={signin} alt="Login" />
          <p>login</p>
        </div>
      </nav>
    </Container>
  );
}
