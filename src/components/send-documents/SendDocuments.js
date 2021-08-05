// native imports
import { React, Component } from 'react';
// npm modules
import axios from 'axios';
import Dropzone  from 'react-dropzone';
// style
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/SendDocuments.css';
// other imports
import logo_usach from '../../assets/images/logo_usach.png';


class SendDocuments extends Component {

  constructor() {
    super();
    this.baseUrl = process.env.REACT_APP_BASE_URL;
    this.state = {
      title:'',
      content:'',
      uploadfile:'',
    };
  }
  // send data
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

  // Dropzone module 
  onDrop = acceptedFiles => {
    if (acceptedFiles.length > 0) {
      this.setState({ uploadfile: acceptedFiles[0] })
    }
  }


  render() {

    const maxSize = 3 * 1024 * 1024;

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
          <Dropzone
            onDrop = {this.onDrop}
            accept = "application/pdf"
            minSize={1}
            maxSize={maxSize}
          >
          
          {({ getRootProps, getInputProps }) => (
            <div className="container">
              <form onSubmit = { this.handleSubmit.bind(this) }>
                  <div className="input-field">
                      <button className="btn pink lighten-1 z-depth-0">Create</button>
                  </div>
              </form>
              <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  {console.log("SelectedFile"+ {...getRootProps() })}
                  <p>Choose image File</p>
                  {this.state.uploadfile ? <p>Selected file: {this.state.uploadfile.name}</p> : null}
              </div>
            </div>
        )}</Dropzone>

        </div>
        {/* <div className="row justify-content-center">
          <button className="btn btn-size text-center" onClick = {this.handleSubmit.bind(this)}>Enviar</button>
        </div> */}
      </div>  
    )
  }
}

  
export default SendDocuments;