import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import '../App.css';
const Poster = (props) => {
  
  
  return (
    <div>
      <Jumbotron fluid className="text-center my-3">
        <Container fluid>
          <h1 className="display-3">Buddies Canteen</h1>
          <p className="lead">Good Food Makes Your Day Good</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Poster;