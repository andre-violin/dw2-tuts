import React, { useState } from "react"
import api from "../../services/api"

import { Container } from "./styles"

export default function Login({ history }) {
  const [user, setUser] = new useState("")

  async function handleSubmit(event) {
    event.preventDefault()

    const result = await api.post("/", {
      email: user
    })
    localStorage.setItem("userTuts", result.data._id)

    history.push("/tutoriais")
  }

  return (
    <Container>
      <div>
        <form onSubmit={handleSubmit}>
          <p>
            dw<sub>2</sub>t
          </p>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={user}
            onChange={event => setUser(event.target.value)}
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </Container>
  )
}
