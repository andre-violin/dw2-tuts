import React, { useState } from "react"

import api from "../../services/api"
import { Container } from "./styles"

export default function AddTutorial({ history }) {
  const [titulo, setTitulo] = useState("")
  const [conteudo, setConteudo] = useState("")

  async function handleSubmit(event) {
    event.preventDefault()
    const autor = localStorage.getItem("userTuts")
    console.log(autor)

    await api.post("/tutorial", {
      titulo,
      autor,
      conteudo
    })

    history.push("/tutoriais")
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div className="content-input">
          <label htmlFor="titulo">Título</label>
          <input
            id="titulo"
            type="text"
            onChange={event => setTitulo(event.target.value)}
          />
        </div>
        <div className="content-input">
          <label htmlFor="conteudo">Conteúdo</label>
          <textarea
            id="conteudo"
            cols="30"
            rows="10"
            onChange={event => setConteudo(event.target.value)}
          ></textarea>
        </div>
        <button type="submit">Adicionar</button>
      </form>
    </Container>
  )
}
