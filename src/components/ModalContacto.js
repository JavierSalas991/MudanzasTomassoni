import React, { useState } from "react";
import { Button, Form, Modal, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram,  faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link, withRouter } from "react-router-dom";
import LogoEmpresa from "../img/logoEmpresa2.jpg";

const ModalContacto = (props) => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  //   const [show, setShow] = useState(false);
  const handleClose = () => props.setShow(false);
  const [error, setError] = useState(false);
  //   const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <img src={LogoEmpresa} alt="logo" className="logoRojo" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {/* primer div */}
          <div className="d-none d-md-block">
            <br />
            <div className="d-flex justify-content-around">
              <Link to={"/*"} onClick={handleClose} className="linkModal">
                <div className="d-flex justify-content-center cuadroLlamada">
                  <FontAwesomeIcon
                    icon={faPhone}
                    size="3x"
                    className="facebook mx-2"
                  />
                  <p className="my-2">Llamanos.</p>
                </div>
              </Link>
              <Link to={"/*"} onClick={handleClose} className="linkModal">
                <div className="d-flex justify-content-center cuadroWhatsapp">
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    size="3x"
                    className="google mx-2"
                  />
                  <p className="my-2">Envianos un Whatsapp.</p>
                </div>
              </Link>
            </div>
          </div>

          {/* segundo div */}
          <div className="d-md-none ">
            <br />
            <div className="d-flex justify-content-around">
              <Link to={"/*"} onClick={handleClose} className="linkModal">
                <div className="d-flex justify-content-center cuadroLlamada">
                  <FontAwesomeIcon
                    icon={faPhone}
                    size="3x"
                    className="facebook mx-2"
                  />
                  <p className="my-2">Llamar.</p>
                </div>
              </Link>
              <br/>
              <Link to={"/*"} onClick={handleClose} className="linkModal">
                <div className="d-flex justify-content-center cuadroWhatsapp">
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    size="3x"
                    className="google mx-2"
                  />
                  <p className="my-2">Whatsapp.</p>
                </div>
              </Link>
            </div>
          </div>

          <hr />
          <div className=" my-4 d-flex justify-content-center">
          <FontAwesomeIcon
                    icon={faEnvelope}
                    size="3x"
                    className="google mx-2"
                  />
          <h4 className="my-2">Envianos una consulta</h4>
          </div>
          <Form onSubmit={handleSubmit}>
            <div className="row mt-4 text-left">
              <Form.Group
                // controlId="formBasicEmail"
                className="col-12"
              >
                <Form.Label>Nombre y Apellido</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre"
                  onChange={(e) => {
                    setUser(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group
                // controlId="formBasicEmail"
                className="col-sm-12 col-md-6"
              >
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Telefono"
                  onChange={(e) => {
                    setUser(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group
                controlId="formBasicEmail"
                className="col-sm-12 col-md-6"
              >
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="E-mail"
                  onChange={(e) => {
                    setUser(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group
                controlId="exampleForm.ControlTextarea1"
                className="col-12"
              >
                <Form.Label>Consulta</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </div>
            <div className="w-100 my-3 text-right">
              <Button className="mr-2" variant="primary" type="submit">
                Enviar consulta
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Cerrar
              </Button>
            </div>
            {error === true ? (
              <Alert className="my-3" variant={"danger"}>
                Debes completar los campos obligatorios!
              </Alert>
            ) : null}

            <div className="pt-3 footerRegistro">
              {/* primer div */}
              <div className="d-none d-md-block">
                <br />
                <div className="d-flex justify-content-around">
                  <Link to={"/*"} onClick={handleClose} className="linkModal">
                    <div className="d-flex justify-content-center cuadroFacebook">
                      <FontAwesomeIcon
                        icon={faFacebook}
                        size="3x"
                        className="facebook mx-2"
                      />
                      <p className="my-2">Visitanos en Facebook.</p>
                    </div>
                  </Link>
                  <Link to={"/*"} onClick={handleClose} className="linkModal">
                    <div className="d-flex justify-content-center cuadroInstagram">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="3x"
                        className="google mx-2"
                      />
                      <p className="my-2">Visitanos en Instagram.</p>
                    </div>
                  </Link>
                </div>
              </div>

              {/* segundo div */}
              <div className="d-md-none ">
                <br />
                <div>
                  <Link to={"/*"} onClick={handleClose} className="linkModal">
                    <div className="d-flex justify-content-center cuadroFacebook">
                      <FontAwesomeIcon
                        icon={faFacebook}
                        size="3x"
                        className="facebook mx-2"
                      />
                      <p className="my-2">Visitanos en Facebook.</p>
                    </div>
                  </Link>
                  <br />
                  <Link to={"/*"} onClick={handleClose} className="linkModal">
                    <div className="d-flex justify-content-center cuadroInstagram">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="3x"
                        className="google mx-2"
                      />
                      <p className="my-2">Visitanos en Instagram.</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalContacto;
