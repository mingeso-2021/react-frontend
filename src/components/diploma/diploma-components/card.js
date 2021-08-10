// native imports
import React from 'react';
// style
import '../../../assets/css/DiplomaCard.css';


const DiplomaCard = ( img, title ) => {

    return (
        <div className="card card-size">
            <img
                alt=""
                src={img}
                className="card-img-top card-img-size"
            />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text text-left">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    )

}

export default DiplomaCard;