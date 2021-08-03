import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/SendDocuments.css'

import logo_usach from '../assets/images/logo_usach.png'

const SendDocuments = () => {

  return (
    <div className="container position-form form-size shadow p-3 mb-5 bg-white rounded"> 
      <div className="row justify-content-center">
        <img
          alt=""
          src={logo_usach}
          className="img-box-logo"
        />
      </div>
      <div className="row justify-content-center">
        <label for="formFileMultiple" className="form-label">Seleccione sus documentos</label>
      </div>
      <div className="row justify-content-center">
        <input className="form-control" type="file" style={{width:"500px"}} id="formFileMultiple" multiple />
      </div>
      <div className="row justify-content-center">
        <button className="btn btn-size text-center">Enviar</button>
      </div>
    </div>
  )
}

  
export default SendDocuments;