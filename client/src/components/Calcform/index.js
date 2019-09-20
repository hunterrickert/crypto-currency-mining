import React from "react";

const apiKey = "f9865560a355a1622f47aad89bba07c2be67de3b";
const caClient = new CryptoApis(apiKey);

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Col,
  Row
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
                <Label for="cost">Cost ($/kWh)</Label>
                <Input type="text" name="text" id="cost" />
              </FormGroup>
            </Col>
            <Col xs="6">
              <FormGroup>
                <Label for="watts">Watts</Label>
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
                <Label for="hashrate">Hash Rate GH/s</Label>
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
                <Label for="difficulty">Difficulty</Label>
                <Input
                  onChange={this.handleChange}
                  type="text"
                  name="difficulty"
                  id="difficulty"
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label for="blockreward">Block Reward</Label>
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
            </Col>
          </Row>
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
        </Form>
      </div>
    );
  }
}
// ETH Calculator
caClient.BC.ETH.switchNetwork(caClient.BC.ETH.NETWORKS.ROPSTEN)
  .then(function(result) {
    console.log(result);
  })
  .catch(function(err) {
    console.error(err);
  });
