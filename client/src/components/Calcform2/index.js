import React from "react";

import {
  Button,
  FormGroup,
  Input,
  FormText,
  Col,
  Row,
  UncontrolledTooltip,
  InputGroupAddon,
  InputGroup,
  InputGroupText
} from "reactstrap";

// import API from "./../../utils/API";

export default class Calcform extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      blkReward: 3,
      usdValue: "",
      usdProfit: "",
      electricCost: "",
      reward: "",
      ethPrice: ""
    };
  }

  handleSubmit = () => {
    console.log("this.props", this.props);
    console.log("this.state.hashrate", this.state.hashrate);
    // Bitcoin mining reward formula
    const reward = Number(
      (((((this.state.hashrate * 1000000) / this.props.ethHash / 13) *
        1000 *
        1000000 *
        60) /
        13) *
        this.state.blkReward *
        60 *
        24 *
        30) /
        1.8
    ).toFixed(8);
    // Electricity cost formula
    const electricCost = Number(
      (this.state.watts / 1000) * 24 * this.state.cost * 30
    ).toFixed(2);
    // USD Value formula
    const usdValue = Number((this.props.ethPrice * reward).toFixed(2));

    console.log("USD", usdValue);
    this.setState({
      reward,
      electricCost,
      usdValue,
      // USD Profit formula
      usdProfit: Number(usdValue - electricCost).toFixed(2)
    });
    console.log(this.state.usdValue + "this is this.state.usdValue");
    console.log(this.state.reward + "this is this.state.reward");
  };

  handleChange = e => {
    console.log(e.target.name);
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
          <Row>
            <Col xs="6" style={{marginTop: "15px"}}>
              <InputGroup>
                <InputGroupAddon addonType="prepend" for="cost">
                  <InputGroupText style={{fontSize: "12px"}}>
                  <span href="#" id="costexplain1">
                    Cost ($/kWh)
                  </span>
                  </InputGroupText>
                </InputGroupAddon>
                <UncontrolledTooltip
                  placement="auto"
                  target="costexplain1"
                  fade="true"
                >
                  This is your elecricity cost per kilowatt hour. You may need
                  to contact your utility provider to identify this cost.
                </UncontrolledTooltip>
                <Input
                  onChange={this.handleChange}
                  type="text"
                  name="cost"
                  id="cost"
                  placeholder="0.00"
                />
              </InputGroup>
            </Col>
            <Col xs="6" style={{marginTop: "15px"}}>
              <InputGroup>
                <InputGroupAddon addonType="prepend" for="watts">
                  <InputGroupText style={{fontSize: "12px"}}>
                  <span href="#" id="wattsexplain1">
                    Watts
                  </span>
                  </InputGroupText>
                </InputGroupAddon>
                <UncontrolledTooltip
                  placement="auto"
                  target="wattsexplain1"
                  fade="true"
                >
                  This refers to the amount of energy your miner consumes. For
                  example, the Antminer S9 uses 1172 watts.
                </UncontrolledTooltip>
                <Input
                  onChange={this.handleChange}
                  type="text"
                  name="watts"
                  id="volumeFilter"
                  placeholder="1000"
                ></Input>
              </InputGroup>
            </Col>
            <Col xs="6" style={{marginTop: "15px"}}>
              <InputGroup>
                <InputGroupAddon addonType="prepend" for="hashrate">
                  <InputGroupText style={{fontSize: "12px"}}>
                  <span href="#" id="hashexplain1">
                    Hash Rate MH/s
                  </span>
                  </InputGroupText>
                </InputGroupAddon>
                <UncontrolledTooltip
                  placement="auto"
                  target="hashexplain1"
                  fade="true"
                >
                  This refers to the amount hashing power your miner has. For
                  example, the Antminer S9 has a hashrate of 11.85 TH/s.
                </UncontrolledTooltip>
                <Input
                  onChange={this.handleChange}
                  type="text"
                  name="hashrate"
                  id="hashrate"
                  placeholder="1400"
                ></Input>
              </InputGroup>
            </Col>
            <Col xs="6" style={{marginTop: "15px"}}>
              <InputGroup>
                <InputGroupAddon addonType="prepend" for="blockreward">
                  <InputGroupText style={{fontSize: "12px"}}>
                  <span href="#" id="blockrewardexplain1">
                    Block Reward
                  </span>
                  </InputGroupText>
                </InputGroupAddon>
                <UncontrolledTooltip
                  placement="auto"
                  target="blockrewardexplain1"
                  fade="true"
                >
                  The Block Reward is the amount of the CryptoCurrency that is
                  paid out per block mined. When joining a mining pool, this
                  reward is divided amongst all pool participants based off of
                  the percentage of hashing power they are providing to the
                  pool.
                </UncontrolledTooltip>
                <Input
                  onChange={this.handleChange}
                  type="text"
                  name="blockreward"
                  id="blockreward"
                  value={this.state.blkReward}
                ></Input>
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col style={{marginTop: "15px"}}>
              <FormGroup>
                <FormText className="text-center">
                  <p style={{ color: "black" }}>
                    Your results will be displayed below!
                  </p>
                </FormText>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <Button onClick={this.handleSubmit}>Submit</Button>
              <Button style={{ marginLeft: "20px" }}>Reset</Button>
            </Col>
          </Row>
          <hr />
          <Row style={{ marginTop: "10px" }}>
            <Col xs="6" style={{marginTop: "15px"}}>
              <InputGroup>
                <InputGroupAddon addonType="prepend" for="btcmined">
                  <InputGroupText style={{fontSize: "12px"}}>Monthly ETH Mined</InputGroupText>
                  </InputGroupAddon>
                <Input
                  onChange={this.handleSubmit}
                  type="text"
                  name="btcmined"
                  id="btcmined"
                  value={this.state.reward}
                  placeholder="0.00"
                ></Input>
              </InputGroup>
            </Col>
            <Col xs="6" style={{marginTop: "15px"}}>
              <InputGroup>
                <InputGroupAddon addonType="prepend" for="usdValue">
                <InputGroupText style={{fontSize: "12px"}}>USD Value</InputGroupText>
                </InputGroupAddon>
                <Input
                  onChange={this.handleSubmit}
                  type="text"
                  name="usdValue"
                  id="usdValue"
                  value={this.state.usdValue}
                  placeholder="0.00"
                ></Input>
              </InputGroup>
            </Col>
            <Col xs="6" style={{marginTop: "15px"}}>
              <InputGroup>
                <InputGroupAddon addonType="prepend" for="electricCost">
                <InputGroupText style={{fontSize: "12px"}}>Electricity Cost</InputGroupText>
                  </InputGroupAddon>
                <Input
                  onChange={this.handleSubmit}
                  type="text"
                  name="electricCost"
                  id="electricCost"
                  value={this.state.electricCost}
                  placeholder="0.00"
                ></Input>
              </InputGroup>
            </Col>
            <Col xs="6" style={{marginTop: "15px"}}>
              <InputGroup>
                <InputGroupAddon addonType="prepend" for="usdprofit">
                <InputGroupText style={{fontSize: "12px"}}>Monthly USD Profit</InputGroupText>
                  </InputGroupAddon>
                <Input
                  onChange={this.handleSubmit}
                  type="text"
                  name="usdprofit"
                  id="usdprofit"
                  value={this.state.usdProfit}
                  placeholder="0.00"
                ></Input>
              </InputGroup>
            </Col>
          </Row>
      </div>
    );
  }
}
