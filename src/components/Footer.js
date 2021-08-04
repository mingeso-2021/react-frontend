import React from 'react';

import '../assets/css/Footer.css'
import logo_footer from '../assets/images/logo_footer.png'

const Footer = () => {

    return (
        <div className="main-footer mt-5">
            <div className="container">
                <div className="row justify-content-center padding-row-footer">
                    {/* Column 1 */}
                    <div className="col">
                        <img
                            alt=""
                            src={logo_footer}
                            className="img-box"
                        />
                    </div>
                    {/* Column 2 */}
                    <div className="col text-center pt-3">
                        <div>
                            <span className="footer-text"><b>Siguenos en</b></span>
                            {/* Insertar logo facebook */}
                        </div>
                    </div>
                    {/* Column 3 */}
                    <div className="col text-center pt-3">
                        <ul className="list-unstyled">
                            <li>Otras cosas necesarias</li>
                            <li>Mas cosillas</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm text-center">
                        &copy;2021 Plataforma Diplomados USACH | Todos los derechos reservados
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;