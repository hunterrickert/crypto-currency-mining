import React from "react";
import { Jumbotron, Container } from 'reactstrap';
import "./style.css";

function Heading(props) {
  return (
    // <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
    //   {props.children}
    // </div>

    <div>
      <Jumbotron fluid className="text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
        <Container fluid>
          {props.children}
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Heading;
