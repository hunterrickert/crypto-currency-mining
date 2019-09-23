import React from "react";
import { Container, Row, Col, Media } from "reactstrap";
import Calcform from "../components/Calcform";
import Calcform2 from "../components/Calcform2";
import API from "../utils/API";
import BitImage from "../images/bitcoinimage.jpg";
import EImage from "../images/ethereum.jpg";

var imgstyle = {
  minWidth: "100%",
  height: "150px",
  marginTop: "10px"
};

class Calculator extends React.Component {
  state = {
    blockInfo: null,
    btcPrice: ""
  };

  componentDidMount = () => {
    API.getbtcHashrate().then(data => this.setState({ blockInfo: data }));
    API.getbtcPrice().then(data => this.setState({ btcPrice: data.Price }));
    // API.getethDifficulty().then(data => this.setState({ blockInfo: data }));
    // API.getethPrice().then(data => this.setState({ ethPrice: data.Price }));
  };

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(https://images.wallpaperscraft.com/image/cube_dark_texture_shape_119956_300x168.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed"
        }}
      >
        <Container>
          <Row>
            <Col
              sm="12"
              md={{ size: 5, offset: 0 }}
              className="border border-light"
              style={{ backgroundColor: "white", marginTop: "100px" }}
            >
              {/* BTC Calculator */}
              <h3>
                <Media
                  style={imgstyle}
                  object
                  src={BitImage}
                  alt="bitcoin image"
                  rounded
                />
              </h3>
              <h4>
                Current BTC Difficulty H/s:
                {this.state.blockInfo
                  ? this.state.blockInfo.btc.difficulty
                  : ""}
              </h4>
              <h4>1 BTC = {this.state.btcPrice}</h4>
              <hr />
              {this.state.blockInfo ? (
                <Calcform
                  btcHash={this.state.blockInfo.btc.difficulty}
                  btcPrice={this.state.btcPrice}
                  minedbtc={this.state.reward}
                  reward={this.state.reward}
                />
              ) : (
                <Calcform></Calcform>
                // Eth Calculator
              )}
            </Col>
            <Col
              sm="12"
              md={{ size: 5, offset: 2 }}
              className="border border-light"
              style={{ backgroundColor: "white", marginTop: "100px" }}
            >
              <h3>
                <Media
                  style={imgstyle}
                  object
                  src={EImage}
                  alt="ethereum image"
                  rounded
                />
              </h3>
              <h4>
                {/* Current ETH Hashrate MH/s: {this.state.blockInfo.eth.difficulty} */}
              </h4>
              <h4>1 ETH = {this.state.ethPrice}</h4>
              <hr />
              <Calcform2
                ethHash={this.state.ethHash}
                ethPrice={this.state.ethPrice}
              />
            </Col>
          </Row>
        </Container>
        <div
          className="footer"
          style={{
            padding: "30px"
          }}
        ></div>
      </div>
    );
  }
}

export default Calculator;
