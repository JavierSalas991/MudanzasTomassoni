import React, { useState } from "react";
import { Button, Form, Modal, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link, withRouter } from "react-router-dom";
import LogoEmpresa from "../img/logoEmpresa2.jpg";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const ModalContacto = (props) => {
  const [user, setUser] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [consulta, setConsulta] = useState("");
  //   const [show, setShow] = useState(false);
  const handleClose = () => props.setShow(false);
  const [error, setError] = useState(false);
  //   const handleShow = () => setShow(true);


  let service_id = "gmail";
  let template_id = "template_7jnup2a";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.trim() === "" || phone.trim() === "" || mail.trim() === "" || consulta.trim() === "") {
      //mostrar cartel de error
      setError(true);
      return;
    } else {
      //los datos son correctos
      handleClose()
      reiniciarDatos()

      let timerInterval
      Swal.fire({
        title: 'Enviando mensaje',
        // html: 'I will close in <b></b> milliseconds.',
        timer: 1000,
        timerProgressBar: true,
        iconColor: 'rgb(217, 35, 15)',
        willOpen: () => {
          Swal.showLoading()
          timerInterval = setInterval(() => {
            const content = Swal.getContent()
            if (content) {
              const b = content.querySelector('b')
              if (b) {
                b.textContent = Swal.getTimerLeft()
              }
            }
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
          Swal.fire({

            icon: 'success',
            title: 'Mensaje enviado!',
            text: 'Su mensaje fue enviado correctamente. Le responderemos a la brevedad.',
            iconColor: 'rgb(217, 35, 15)',
            confirmButtonColor: "rgb(217, 35, 15)"

            })
          }
      }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log('I was closed by the timer')
            }
          })


      // Swal.fire({

      //   icon: 'success',
      //   title: 'Mensaje enviado!',
      //   text: 'Su mensaje fue enviado correctamente. Le responderemos a la brevedad.',
      //   iconColor: 'rgb(217, 35, 15)',
      //   confirmButtonColor: "rgb(217, 35, 15)"

      // })
      sendMail();
    }
    setError(false);


  };

  const sendMail = () => {

    // emailjs.sendForm(service_id, template_id, "#formulario", 'user_BwytNkHgpp6QgdbpF5rbf')
    // .then((result) => {
    //   console.log(result.text);
    // }, (error) => {
    //   console.log(error.text)
    // })
  }
  const reiniciarDatos = () => {
    setUser("");
    setMail("");
    setPhone("");
    setConsulta("");
  }

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
            <div className="d-flex justify-content-around mt-4">
              <br />
              <div className="d-flex justify-content-center align-items-center cuadroLlamada mb-4">
                <FontAwesomeIcon
                  icon={faPhone}
                  size="2x"
                  className="facebook mx-2"
                />
                <h5 className="my-2">(0381)153592337</h5>
              </div>
              <div className="d-flex justify-content-center align-items-center cuadroLlamada mb-4">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="2x"
                  className="facebook mx-2"
                />
                <h5 className="my-2">luciano_tomassoni@hotmail.com</h5>
              </div>

            </div>
          </div>

          {/* segundo div */}
          <div className="d-md-none ">
            <br />
            <div className="d-flex flex-column  justify-content-around">
              <div className="d-flex justify-content-center align-items-center cuadroLlamada ">
                <FontAwesomeIcon
                  icon={faPhone}
                  size="2x"
                  className="facebook mx-2"
                />
                <h5 className="my-1">(0381) 155666777</h5>
              </div>
              <br />
              <div className="d-flex justify-content-center align-items-center cuadroLlamada">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="2x"
                  className="facebook mx-2"
                />
                <h5 className="my-1">luciano_tomassoni@hotmail.com</h5>
              </div>
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
          <Form onSubmit={handleSubmit}
            id="formulario">
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
                  name="user"
                />
              </Form.Group>

              <Form.Group
                // controlId="formBasicEmail"
                className="col-sm-12 col-md-6"
              >
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Telefono"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  name="phone"
                />
              </Form.Group>
              <Form.Group
                controlId="formBasicEmail"
                className="col-sm-12 col-md-6"
              >
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control
                  type="mail"
                  placeholder="E-mail"
                  onChange={(e) => {
                    setMail(e.target.value);
                  }}
                  name="mail"
                />
              </Form.Group>
              <Form.Group
                controlId="exampleForm.ControlTextarea1"
                className="col-12"
              >
                <Form.Label>Consulta</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  type="text"
                  placeholder="Consulta"
                  onChange={(e) => {
                    setConsulta(e.target.value);
                  }}
                  name="consulta"
                />
              </Form.Group>
            </div>
            {error === true ? (
              <Alert className="my-3" variant={"danger"}>
                ¡Todos los campos son obligatorios!
              </Alert>
            ) : null}
            <div className="w-100 my-3 text-right">
              <Button className="mr-2" variant="primary" type="submit">
                Enviar consulta
              </Button>
              <button className="btn bg-dark text-white" onClick={handleClose}>
                Cerrar
              </button>
            </div>


            {/* <div className="pt-3 footerRegistro"> */}


            {/* los dos siguientes div son de facebook e instagram. Todavia no se los mostrará */}
            {/* primer div */}
            {/* <div className="d-none d-md-block">
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
              </div> */}

            {/* segundo div */}
            {/* <div className="d-md-none ">
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
              </div> */}

            {/* </div> */}


          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalContacto;
