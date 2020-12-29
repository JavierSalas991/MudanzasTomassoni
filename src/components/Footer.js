import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link, withRouter} from "react-router-dom";

const Footer = (props) => {
  return (
    <div >
      {/* el siguiente div contiene los botones de facebook e instagram que todavia no se los mostrará */}
      {/* <div className="d-flex flex-column justify-content-center align-items-center bg-dark text-white py-3">
        <h3 className="mt-3">Seguinos en:</h3>
        <div>
          <FontAwesomeIcon icon={faFacebook} size="2x" className="mx-2" />
          <FontAwesomeIcon icon={faInstagram} size="2x" className="mx-2" />
        </div>
      </div> */}


      {/* dispositivos grandes */}
      <div className="d-none d-md-block bg-dark p-2">
        <div className="d-flex justify-content-around bg-dark text-white py-4">
          <div className="d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={faPhone} size="3x" className="iconoFooter" />
            <h4>(0381) 153592337</h4>
            <hr />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="3x"
              className="iconoFooter"
            />
            <h4>luciano_tomassoni@hotmail.com</h4>
            <hr />
          </div>

          <div className="d-flex align-items-center justify-content-center">
          <FontAwesomeIcon icon={faArrowCircleRight} size="3x" className="iconoFooter" />
          <Link onClick={props.handleShow} className="my-2 btn btn-primary">
            Contactanos
            </Link>
            <hr />
          </div>
        </div>
      </div>

      {/* dispositivos chicos */}
      <div className="d-md-none ">
        <div className="d-flex flex-column align-items-start justify-content-center bg-dark text-white py-2 pl-auto">
          <div className="d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={faPhone} size="3x" className="iconoFooter" />
            <h4>(0381) 153592337</h4>
           
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="3x"
              className="iconoFooter"
            />
            <h4>luciano_tomassoni@hotmail.com</h4>
            
          </div>

          <div className="d-flex align-items-center justify-content-center">
          <FontAwesomeIcon icon={faArrowCircleRight} size="3x" className="iconoFooter" />
          <Link onClick={props.handleShow} className="my-2 btn btn-primary">
            Contactanos
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
