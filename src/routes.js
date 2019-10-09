import React from "react"
import { BrowserRouter, Route } from "react-router-dom"

import Login from "./pages/Login"
import Home from "./pages/Home"
import AddTutorial from "./pages/AddTutorial"
import Nav from "./components/Nav"

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Nav />
      <Route path="/tutoriais" component={Home} />
      <Route path="/addtutorial" component={AddTutorial} />
    </BrowserRouter>
  )
}
