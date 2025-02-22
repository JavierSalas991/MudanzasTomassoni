import React, { useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import LogoRojo from '../img/logooscuro2.png'
import { Link, withRouter } from "react-router-dom";
import ModalContacto from "./ModalContacto"


const Header = (props) => {

  return (
    
      <Navbar sticky="top" bg="dark" expand="lg" variant="dark" >
        <Navbar.Brand href="#home">
          <img src={LogoRojo} alt="" className="logoRojo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto d-flex justify-content-center">
            {/* <Nav.Link href="#home">Inicio</Nav.Link> */}
            <Link onClick={props.handleShow} className="my-2 btn btn-primary">
              Contacto
            </Link>
          </Nav>
        </Navbar.Collapse>
        <ModalContacto setShow={props.setShow} show={props.show}></ModalContacto>
      </Navbar>

  );
};

export default Header;
