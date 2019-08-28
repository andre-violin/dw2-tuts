import React from "react";

import { Container } from "./styles";
import home from "../../assets/home.svg";
import signin from "../../assets/signin.svg";

export default function Home() {
  return (
    <Container>
      <header>
        <h1>DW2 Tuts</h1>
      </header>

      <section>article>header>h2+p+div>p*3>lorem</section>

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
