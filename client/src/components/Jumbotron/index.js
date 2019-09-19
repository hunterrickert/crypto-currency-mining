import React from "react";
import { Jumbotron, Container } from 'reactstrap';

function Heading(props) {
  return (
    // <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
    //   {props.children}
    // </div>

    <div>
      <Jumbotron fluid 
      className="text-center" 
      style={{ 
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100% auto",
        padding: '13rem' 
        }}>
        <Container fluid>
          {props.children}
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Heading;
