import React from 'react';
import LogoEmpresa from '../img/logoEmpresa2.jpg'

const LogoTomassoni = () => {
    return (
        <div className="d-none d-md-block">
            <div className="d-flex justify-content-center">
                <img src={LogoEmpresa} alt="" className="imgLogo mt-2"/>
            </div>
        </div>

    );
};

export default LogoTomassoni;