import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link, withRouter} from "react-router-dom";

const Footer = (props) => {
  return (
    <div>
      <div className="d-flex flex-column justify-content-center align-items-center bg-dark text-white py-3">
        <h3 className="mt-3">Seguinos en:</h3>
        <div>
          <FontAwesomeIcon icon={faFacebook} size="2x" className="mx-2" />
          <FontAwesomeIcon icon={faInstagram} size="2x" className="mx-2" />
        </div>
      </div>
      {/* primer div */}
      <div className="d-none d-md-block">
        <div className="d-flex justify-content-around bg-dark text-white pb-4">
          <div className="d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={faPhone} size="3x" className="iconoFooter" />
            <h4>(0381) 155666777</h4>
            <hr />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="3x"
              className="iconoFooter"
            />
            <h4>mudanzas@gmail.com</h4>
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

      {/* segundo div */}
      <div className="d-md-none ">
        <div className="d-flex flex-column align-items-center justify-content-center bg-dark text-white pb-4">
          <div className="d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={faPhone} size="3x" className="iconoFooter" />
            <h4>(0381) 155666777</h4>
           
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="3x"
              className="iconoFooter"
            />
            <h4>mudanzas@gmail.com</h4>
            
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
