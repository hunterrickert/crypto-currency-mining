import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Calcform from "../components/Calcform";
import API from "../utils/API";

class Calculator extends React.Component {
  state = {
    btcHash: "",
    btcPrice: ""
  };

  componentDidMount = () => {
    API.getbtcHashrate().then(data => this.setState({ btcHash: data }));
    API.getbtcPrice().then(data => this.setState({ btcPrice: data.Price }));
  };

  render() {
    return (
      <div>
        <Container
          style={{
            marginTop: "100px"
          }}
        >
          <Row>
            <Col sm="12" md={{ size: 6, offset: 0 }}>
              <h3>
                Mining Calculator <Button className="float-right">Reset</Button>
              </h3>
              <h4>Current BTC Hashrate GH/s: {this.state.btcHash}</h4>
              <h4>1 BTC = {this.state.btcPrice}</h4>
              <hr />
              <Calcform
                btcHash={this.state.btcHash}
                btcPrice={this.state.btcPrice}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Calculator;
