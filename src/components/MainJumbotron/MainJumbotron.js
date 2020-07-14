import React from 'react';
import {Jumbotron,Container,Button} from 'react-bootstrap';
import './MainJumbotron.css';

const MainJumbotron = () =>{
    return(
<Jumbotron fluid>
  <Container>   
    <h1>Hello, there! Looking for jobs?</h1>
  <center>
    <Button variant="outline-light" size="lg">Search Now!</Button>
  </center>
  </Container>
</Jumbotron>);
}

export default MainJumbotron;
