import React from "react";

// const apiKey = "f9865560a355a1622f47aad89bba07c2be67de3b";
// const caClient = new CryptoApis(apiKey);

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Col,
  Row,
  UncontrolledTooltip
} from "reactstrap";

export default class Calcform extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      blkReward: 12.5
    };
  }

  handleSubmit = () => {
    let reward =
      ((this.state.hashrate / this.props.btcHash) *
        144 *
        this.state.blkReward *
        30) /
      (2.2).toFixed(8);
    alert(`monthly btc mined: ${reward} BTC`);

    let rewardUsd = `${reward}` * this.props.btcPrice;
    console.log(rewardUsd);
  };

  handleChange = e => {
    console.log(e.target.name);
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <Form>
          <Row>
            <Col xs="6">
              <FormGroup>
                <Label for="cost">
                  <span href="#" id="costexplain">
                    Cost ($/kWh)
                  </span>
                </Label>
                <UncontrolledTooltip placement="top" target="costexplain">
                  Hello world!
                </UncontrolledTooltip>
                <Input type="text" name="text" id="cost" />
              </FormGroup>
            </Col>
            <Col xs="6">
              <FormGroup>
                <Label for="watts">
                  <span href="#" id="wattsexplain">
                    Watts
                  </span>
                </Label>
                <UncontrolledTooltip placement="top" target="wattsexplain">
                  Hello!
                </UncontrolledTooltip>
                <Input
                  onChange={this.handleChange}
                  type="text"
                  name="watts"
                  id="volumeFilter"
                ></Input>
              </FormGroup>
            </Col>
            <Col xs="6">
              <FormGroup>
                <Label for="hashrate">
                  <span href="#" id="hashexplain">
                    Hash Rate GH/s
                  </span>
                </Label>
                <UncontrolledTooltip placement="top" target="hashexplain">
                  Hello world!
                </UncontrolledTooltip>
                <Input
                  onChange={this.handleChange}
                  type="text"
                  name="hashrate"
                  id="hashrate"
                ></Input>
              </FormGroup>
            </Col>
            <Col xs="6">
              <FormGroup>
                <Label for="difficulty">
                  <span href="#" id="difficultyexplain">
                    Difficulty
                  </span>
                </Label>
                <UncontrolledTooltip placement="top" target="difficultyexplain">
                  Hello world!
                </UncontrolledTooltip>
                <Input
                  onChange={this.handleChange}
                  type="text"
                  name="difficulty"
                  id="difficulty"
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label for="blockreward">
                  <span href="#" id="blockrewardexplain">
                    Block Reward
                  </span>
                </Label>
                <UncontrolledTooltip
                  placement="top"
                  target="blockrewardexplain"
                >
                  Hello world!
                </UncontrolledTooltip>
                <Input
                  onChange={this.handleChange}
                  type="text"
                  name="blockreward"
                  id="blockreward"
                  value={this.state.blkReward}
                ></Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <FormText color="muted">
                  Your results will be displayed below!
                </FormText>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button onClick={this.handleSubmit}>Submit</Button>
              <Button style={{ marginLeft: "20px" }}>Reset</Button>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col>
              <FormGroup>
                <Label for="blockreward">Block Reward</Label>
                <Input
                  onChange={this.handleChange}
                  type="text"
                  name="blockreward"
                  id="blockreward"
                  value={this.props.reward}
                ></Input>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
// ETH Calculator
// caClient.BC.ETH.switchNetwork(caClient.BC.ETH.NETWORKS.ROPSTEN)
//   .then(function(result) {
//     console.log(result);
//   })
//   .catch(function(err) {
//     console.error(err);
//   });
