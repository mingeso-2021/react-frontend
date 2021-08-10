// native imports
import React from 'react';
// style
import { Carousel } from 'react-bootstrap'
import '../../../assets/css/Carousel.css';
// other imports
import usach_1 from '../../../assets/images/banner/usach_horizontal_1.jpg';
import usach_2 from '../../../assets/images/banner/usach_horizontal_2.jpg';
import usach_3 from '../../../assets/images/banner/docentes_usach.jpg';


const CarouselComponent = () => {

    return (
        <Carousel className="carousel-slide">
            <Carousel.Item>
                <img
                    className="d-block"
                    src={usach_1}
                    width="1000"
                    height="350"
                    alt="First slide"
                />
                <Carousel.Caption>
                <h3>170 años de trayectoria</h3>
                <p>Calificada como una de las mejores universidades a nivel nacional</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block"
                    src={usach_2}
                    width="1000"
                    height="350"
                    alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Campus único</h3>
                <p>Puedes gozar de esta maravillosa experiencia</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block"
                    src={usach_3}
                    width="1000"
                    height="350"
                    alt="Third slide"
                />
                <Carousel.Caption>
                <h3>7 años acreditada</h3>
                <p>Máximo reconocimiento a nivel educacional</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )

}

export default CarouselComponent;