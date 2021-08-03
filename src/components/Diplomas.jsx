import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/Diplomas.css'
import React, { Component } from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap'

class Diplomas extends Component {
  render() {
    return <Container>
        <Card className="text-center">
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
          </Card>
        </Container> 
  }
}
export default  Diplomas;