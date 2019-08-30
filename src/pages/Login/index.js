import React from "react";

import { Container } from "./styles";
import account from "../../assets/account.svg";

export default function Login() {
  return (
    <Container>
      <div>
        <form>
          <p>
            dw<sub>2</sub>t
          </p>
          <label htmlFor="ra">Registro Acadêmico (ra)</label>
          <input type="text" />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </Container>
  );
}
