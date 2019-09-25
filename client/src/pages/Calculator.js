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
    btcPrice: "",
    ethPrice: ""
  };

  componentDidMount = () => {
    API.getbtcHashrate().then(data => this.setState({ blockInfo: data }));
    API.getbtcPrice().then(data => this.setState({ btcPrice: data.Price }));
    API.getethPrice().then(data => {
      console.log(data);
      this.setState({ ethPrice: data.market_data.current_price.usd });
    });
  };

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(https://images.wallpaperscraft.com/image/cube_dark_texture_shape_119956_300x168.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          minWidth: "450px"
        }}
      >
        <Container>
          <Row>
            <Col
              sm="12"
              md={{ size: 5, offset: 0 }}
              className="border border-dark shadow-lg rounded"
              style={{
                backgroundColor: "#ffe14c",
                backgroundImage:
                  "url(https://www.transparenttextures.com/patterns/brick-wall-dark.png)",
                marginTop: "100px"
              }}
            >
              {/* BTC Calculator */}
              <h3>
                <Media
                  style={imgstyle}
                  object
                  src={BitImage}
                  alt="bitcoin image"
                  rounded="true"
                />
              </h3>
              <h4
                className="border border-dark text-center shadow-lg rounded"
                style={{ padding: "10px" }}
              >
                Current BTC Difficulty H/s:
                {this.state.blockInfo
                  ? this.state.blockInfo.btc.difficulty
                  : ""}
              </h4>
              <h4
                className="border border-dark text-center shadow-lg rounded"
                style={{ padding: "10px" }}
              >
                1 BTC = {this.state.btcPrice}
              </h4>
              {this.state.blockInfo ? (
                // console.log(this.state.blockinfo.btc.difficulty),
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
              className="border border-dark shadow-lg rounded"
              style={{
                backgroundColor: "#5e8199",
                backgroundImage:
                  "url(https://www.transparenttextures.com/patterns/brick-wall-dark.png)",
                marginTop: "100px"
              }}
            >
              <h3>
                <Media
                  style={imgstyle}
                  object
                  src={EImage}
                  alt="ethereum image"
                  rounded="true"
                />
              </h3>
              <h4>
                {/* Current ETH Hashrate MH/s: {this.state.blockInfo.eth.difficulty} */}
              </h4>
              <h4
                className="border border-dark text-center shadow-lg rounded"
                style={{ padding: "10px" }}
              >
                Current ETH Difficulty H/s:
                {this.state.blockInfo
                  ? this.state.blockInfo.eth.difficulty
                  : ""}
              </h4>
              <h4
                className="border border-dark text-center shadow-lg rounded"
                style={{ padding: "10px" }}
              >
                1 ETH ={this.state.ethPrice}
                {this.state.blockInfo ? this.state.blockInfo.eth.price : ""}
              </h4>
              {this.state.blockInfo ? (
                <Calcform2
                  ethHash={this.state.blockInfo.eth.difficulty}
                  ethPrice={this.state.ethPrice}
                />
              ) : (
                <Calcform2></Calcform2>
              )}
            </Col>
          </Row>
        <div
          className="footer"
          style={{
            padding: "30px"
          }}
        ></div>
        </Container>
      </div>
    );
  }
}

export default Calculator;
