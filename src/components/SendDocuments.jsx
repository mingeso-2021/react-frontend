import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/SendDocuments.css'
import React, { Component } from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap'

class sendDocuments extends Component {

    render() {
        return <Container>
        <Row>
        <label for="formFileMultiple" class="form-label">Seleccione sus documentos</label>
        </Row>
        <Row className = "justify-content-center">
        <input class="form-control" type="file" style={{width:"500px"}} id="formFileMultiple" multiple />
        </Row>
        <Row className = "justify-content-center mt-1">
        <Button className = "btn-size text-center">Enviar</Button>
        </Row>
        </Container> 
      
    }
  }
  
  export default sendDocuments;