import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCouch,
  faTruckPickup,
  faHouseUser,
  faBuilding,
  faBoxOpen,
} from "@fortawesome/free-solid-svg-icons";

const ListaServicios = () => {
  return (
    <div>
      <div className="tituloServicios py-4 text-center">
        <h2 className="pt-4">Conoce nuestros servicios</h2>
      </div>

      {/* prrimer div */}
      <div className="d-none d-md-block">
        <div className="d-flex">
          <div className="servicio1 d-flex flex-column align-items-center">
            <FontAwesomeIcon icon={faBuilding} size="2x" className="mx-2" />
            <h2 className="text-center"><strong>Mudanzas de empresas</strong></h2>
            <p className="text-center mt-4">Logística pensada a la medida de cada empresa, adaptándonos a sus requerimientos y necesidades.</p>
          </div>
          <div className=" servicio2 d-flex flex-column align-items-center">
            <FontAwesomeIcon icon={faHouseUser} size="2x" className="mx-2" />
            <h2 className="text-center"><strong>Mudanzas particulares</strong></h2>
            <p className="text-center mt-4">Trasladamos todos los muebles y artículos de tu hogar con el mayor cuidado posible.</p>
            
          </div>
          <div className=" servicio1 d-flex flex-column align-items-center">
            <FontAwesomeIcon icon={faTruckPickup} size="2x" className="mx-2" />
            <h2 className="text-center"><strong>Fletes</strong></h2>
            <p className="text-center mt-4">Servicio de traslado economico y rápido, pensado para el traslado de menor cantidad.</p>
          </div>
          <div className="servicio2 d-flex flex-column align-items-center">
            <FontAwesomeIcon icon={faCouch} size="2x" className="mx-2" />
            <h2 className="text-center"><strong>Trabajos con soga</strong></h2>
            <p  className="text-center mt-4">Acenso y descenso de muebles con sogas.</p>
          </div>
          <div className="servicio1 d-flex flex-column align-items-center">
            <FontAwesomeIcon icon={faBoxOpen} size="2x" className="mx-2" />
            <h2 className="text-center"><strong>Embalajes</strong></h2>
            <p  className="text-center mt-4">Ofrecemos servicio de embalaje para todas las necesitades, desde guardado de vajillas hasta cubierta de muebles.</p>
          </div>
        </div>
      </div>

      {/* segundo div */}
      <div className="d-md-none ">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="d-flex flex-column align-items-center justify-content-center w-100 servicio1 container">
            <FontAwesomeIcon icon={faBuilding} size="2x" className="mx-2" />
            <h2>Mudanzas de empresas</h2>
            <p className="text-center mt-1">Logística pensada a la medida de cada empresa, adaptándonos a sus requerimientos y necesidades.</p>
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center w-100 servicio2 container">
            <FontAwesomeIcon icon={faHouseUser} size="2x" className="mx-2" />
            <h2>Mudanzas particulares</h2>
            <p className="text-center mt-1">Trasladamos todos los muebles y artículos de tu hogar con el mayor cuidado posible.</p>
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center w-100 servicio1 container">
            <FontAwesomeIcon icon={faTruckPickup} size="2x" className="mx-2" />
            <h2>Fletes</h2>
            <p className="text-center mt-1">Servicio de traslado economico y rápido, pensado para el traslado de menor cantidad.</p>
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center w-100 servicio2 container">
            <FontAwesomeIcon icon={faCouch} size="2x" className="mx-2" />
            <h2>Trabajos con soga</h2>
            <p  className="text-center mt-1">Acenso y descenso de muebles con sogas.</p>
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center w-100 servicio1 container">
            <FontAwesomeIcon icon={faBoxOpen} size="2x" className="mx-2" />
            <h2>Embalajes</h2>
            <p  className="text-center mt-1">Ofrecemos servicio de embalaje para todas las necesitades, desde guardado de vajillas hasta cubierta de muebles.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListaServicios;
