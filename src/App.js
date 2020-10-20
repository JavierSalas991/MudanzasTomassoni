import React from "react";
import "./App.css";
import "./bootstrap.min.css";
import Inicio from "./components/Inicio";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contacto from "./components/Contacto";
import Empresa from "./components/Empresa";
import Footer from "./components/Footer";
import ListaServicios from "./components/ListaServicios";
import LogoTomassoni from "./components/LogoTomassoni";

function App() {
  return (
    <Router>
      <LogoTomassoni></LogoTomassoni>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Inicio></Inicio>
          <Empresa></Empresa>
          <ListaServicios></ListaServicios>
        </Route>
        <Route exact path="/contacto">
          <Contacto></Contacto>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
