import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCouch,
  faTruckPickup,
  faHouseUser,
  faBuilding,
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
            <h2 className="text-center">Mudanzas de empresas</h2>
            <p className="text-center mt-4">Logística pensada a la medida de cada empresa, adaptándonos a sus requerimientos y necesidades.</p>
          </div>
          <div className=" servicio2 d-flex flex-column align-items-center">
            <FontAwesomeIcon icon={faHouseUser} size="2x" className="mx-2" />
            <h2 className="text-center">Mudanzas particulares</h2>
            <p className="mt-2">Te mudamos en 3 pasos:</p>
            <p>1. Vamos  tu casa
              <br/>
              2. Te damos las cajas
              <br/>
              3. Te mudamos</p>
          </div>
          <div className=" servicio1 d-flex flex-column align-items-center">
            <FontAwesomeIcon icon={faTruckPickup} size="2x" className="mx-2" />
            <h2 className="text-center">Fletes</h2>
            <p className="mt-4">Servicio de traslado en Pickup</p>
          </div>
          <div className="servicio2 d-flex flex-column align-items-center">
            <FontAwesomeIcon icon={faCouch} size="2x" className="mx-2" />
            <h2 className="text-center">Trabajos con soga</h2>
            <p  className="text-center mt-4">Acenso y descenso de muebles con sogas.</p>
          </div>
        </div>
      </div>

      {/* segundo div */}
      <div className="d-md-none ">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="d-flex align-items-center justify-content-center w-100 servicio1">
            <FontAwesomeIcon icon={faBuilding} size="2x" className="mx-2" />
            <h2>Mudanzas de empresas</h2>
          </div>
          <div className="d-flex align-items-center justify-content-center w-100 servicio2">
            <FontAwesomeIcon icon={faHouseUser} size="2x" className="mx-2" />
            <h2>Mudanzas particulares</h2>
          </div>
          <div className="d-flex align-items-center justify-content-center w-100 servicio1">
            <FontAwesomeIcon icon={faTruckPickup} size="2x" className="mx-2" />
            <h2>Fletes</h2>
          </div>
          <div className="d-flex align-items-center justify-content-center w-100 servicio2">
            <FontAwesomeIcon icon={faCouch} size="2x" className="mx-2" />
            <h2>Trabajos con soga</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListaServicios;
