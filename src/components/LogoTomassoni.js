import React from 'react';
import LogoEmpresa from '../img/logoEmpresa2.jpg'

const LogoTomassoni = () => {
    return (
        <div className="d-none d-md-block">
            <div className="d-flex justify-content-center">
                <img src={LogoEmpresa} alt="" className="imgLogo"/>
            </div>
        </div>

    );
};

export default LogoTomassoni;