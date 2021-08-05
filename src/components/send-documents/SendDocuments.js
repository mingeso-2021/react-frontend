// native imports
import { React, Component } from 'react';
// npm modules
import StyledDropzone from './Dropzone.js';
import axios from 'axios';
// style
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/SendDocuments.css';
// other imports
import logo_usach from '../../assets/images/logo_usach.png';


class SendDocuments extends Component {

  constructor() {
    super();
    this.baseUrl = this.baseUrl = process.env.REACT_APP_BASE_URL;;
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log( e );
    
    axios.post(this.baseUrl + "/upload/file", {
        // Insertar peticion
    })
    .then( response => {
        // Aqui la respuesta (si es necesaria)
    })
    .catch( err => console.log(err) );
  };

  render() {
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
          <StyledDropzone
            onDrop = {this.onDrop}
          ></StyledDropzone>
        </div>
        <div className="row justify-content-center">
          <button className="btn btn-size text-center" onClick = {this.handleSubmit.bind(this)}>Enviar</button>
        </div>
      </div>  
    )
  }
}

  
export default SendDocuments;