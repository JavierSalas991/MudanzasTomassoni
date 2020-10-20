import React, {useState} from "react";
import {Navbar, Nav, Button} from "react-bootstrap";
import LogoRojo from '../img/logorojo2.png'
import { Link, withRouter} from "react-router-dom";
import ModalContacto from "./ModalContacto"


const Header = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
      setShow(true); 
    }


  return (
    <div>
      <Navbar bg="primary" expand="lg" variant="dark" sticky="top">
      <Navbar.Brand href="#home">
        <img src={LogoRojo} alt="" className="logoRojo"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto d-flex justify-content-center">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#link">Empresa</Nav.Link>
          <Link onClick={handleShow} className="my-2 btn btn-primary">
            Contacto
            </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
     <ModalContacto setShow={setShow} show={show}></ModalContacto>
    </div>
    
  );
};

export default Header;
