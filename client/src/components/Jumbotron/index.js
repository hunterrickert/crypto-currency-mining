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
        backgroundImage: `url(https://cdn.pixabay.com/photo/2018/12/02/10/07/web-3850917__480.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        padding: "14rem"
        }}>
        <Container fluid>
          {props.children}
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Heading;
