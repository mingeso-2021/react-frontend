// native imports
import React from 'react';
// style
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/Diplomas.css';
// other imports 
import DiplomaCard from './diploma-components/card.js'
import CarouselComponent from './diploma-components/carousel.js'
import diinf from '../../assets/images/logo_informatica.png';
import audit from '../../assets/images/diplomas/auditoria.jpg';
import data_cience from '../../assets/images/diplomas/ciencia_datos.jpeg';
import cyber_security from '../../assets/images/diplomas/cyber-security.jpg';
import business from '../../assets/images/diplomas/negocios-emergentes.jpg';
import examination from '../../assets/images/diplomas/peritaje.jpeg';


const Diplomas = () => {  
    return (
        <div className="container-flex">
            <div className="banner-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <CarouselComponent />
                        </div>
                        <div className="col text-right">
                            <img
                                alt=""
                                src={diinf}
                                className="banner-img"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-colour mt-md-5">
                <div className="container mb-md-5">
                    <div className="row">
                        <div className="col">
                            {DiplomaCard( data_cience, "Diplomado en Ciencia de Datos Aplicada" )}
                        </div>
                        <div className="col">
                            {DiplomaCard( cyber_security, "Diplomado en Ciberseguridad (Gestión, Técnico y Legal" )}
                        </div>
                        <div className="col">
                            {DiplomaCard( business, "Diplomado en Riesgo Operacional y Continuidad del Negocio en Procesos y TICs" )}
                        </div>
                    </div>
                    <div className="row mt-md-5">
                        <div className="col">
                            {DiplomaCard( audit, "Diplomado en Control, Seguridad y Auditoría Computacional" )}
                        </div>
                        <div className="col">
                            {DiplomaCard( examination, "Diplomado en Peritaje Informático" )}
                        </div>
                        <div className="col">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Diplomas;