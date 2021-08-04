import React from 'react';
import {useDropzone} from 'react-dropzone'
import { useMemo } from 'react';
//import { Button, Container, Row} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/SendDocuments.css'

import logo_usach from '../assets/images/logo_usach.png'


const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#0df509'
};


function StyledDropzone(props) {


  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
  } = useDropzone({accept: '.pdf'});

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
  }), [
    isDragActive,
    isDragAccept
  ]);

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));


  return (
    <div className="container">
      <div {...getRootProps({style})}>
        <input {...getInputProps()} />
        <p>Puede arrastrar y soltar archivos aquí para añadirlos</p>
        <em>(Sólo se aceptarán archivos PDF)</em>
      </div>
      <aside>
        <h4>Files</h4>
        <ul className = "list-unstyled">{files}</ul>
      </aside>
    </div>
  );
}

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
      <StyledDropzone />
      </div>
      <div className="row justify-content-center">
        <button className="btn btn-size text-center "><span class="glyphicon glyphicon-ok" ></span>Enviar</button>
      </div>
    </div>
  )
}

  
export default SendDocuments;