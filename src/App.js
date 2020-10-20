import React, {useState} from "react";
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
  const [show, setShow] = useState(false);

  const handleShow = () => {
      setShow(true); 
    }

  return (
    <Router>
      <LogoTomassoni></LogoTomassoni>
      <Header handleShow={handleShow} setShow={setShow} show={show}></Header>
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
      <Footer handleShow={handleShow} setShow={setShow} show={show}></Footer>
    </Router>
  );
}

export default App;
