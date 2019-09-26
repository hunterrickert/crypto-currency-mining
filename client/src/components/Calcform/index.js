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
  InputGroupText,
  InputGroup
} from "reactstrap";
// import POW from "../../pages/POW";

export default class Calcform extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      blkReward: 12.5,
      usdValue: "",
      usdProfit: "",
      electricCost: "",
      reward: ""
    };
  }

  handleSubmit = () => {
    console.log("this.props", this.props);
    console.log("this.state.hashrate", this.state.hashrate);
    // Bitcoin mining reward formula
    const reward = Number(
      ((this.state.hashrate / this.props.btcHash) *
        3600 *
        24 *
        this.state.blkReward *
        30 *
        1000000000) /
        Math.pow(2, 32)
    ).toFixed(8);
    // Electricity cost formula
    const electricCost = Number(
      (this.state.watts / 1000) * 24 * this.state.cost * 30
    ).toFixed(2);
    // USD Value formula
    const usdValue = Number((this.props.btcPrice * reward).toFixed(2));

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
          <Col xs="6" style={{ marginTop: "15px" }}>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText style={{ fontSize: "12px" }}>
                  <span href="#" id="costexplain">
                    Cost ($/kWh)
                  </span>
                </InputGroupText>
              </InputGroupAddon>
              <UncontrolledTooltip placement="auto" target="costexplain">
                This is your elecricity cost per kilowatt hour. You may need to
                contact your utility provider to identify this cost.
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
          <Col xs="6" style={{ marginTop: "15px" }}>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText style={{ fontSize: "12px" }}>
                  <span href="#" id="wattsexplain">
                    Watts
                  </span>
                </InputGroupText>
              </InputGroupAddon>
              <UncontrolledTooltip placement="auto" target="wattsexplain">
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
          <Col xs="6" style={{ marginTop: "15px" }}>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText style={{ fontSize: "12px" }}>
                  <span href="#" id="hashexplain">
                    Hash Rate GH/s
                  </span>
                </InputGroupText>
              </InputGroupAddon>
              <UncontrolledTooltip placement="auto" target="hashexplain">
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
          <Col xs="6" style={{ marginTop: "15px" }}>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText style={{ fontSize: "12px" }}>
                  <span href="#" id="blockrewardexplain">
                    Block Reward
                  </span>
                </InputGroupText>
              </InputGroupAddon>
              <UncontrolledTooltip placement="auto" target="blockrewardexplain">
                The Block Reward is the amount of the CryptoCurrency that is
                paid out per block mined. When joining a mining pool, this
                reward is divided amongst all pool participants based off of the
                percentage of hashing power they are providing to the pool.
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
          <Col style={{ marginTop: "15px" }}>
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
          <Col xs="6" style={{ marginTop: "15px" }}>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText style={{ fontSize: "12px" }}>
                  <span href="#" id="minedbtc">
                    Mined BTC
                  </span>
                </InputGroupText>
              </InputGroupAddon>
              <UncontrolledTooltip placement="auto" target="minedbtc">
                Mine BTC refers to the amount of Bitcoin mined in a month.
              </UncontrolledTooltip>
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
          <Col xs="6" style={{ marginTop: "15px" }}>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText style={{ fontSize: "12px" }}>
                  USD Value
                </InputGroupText>
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
          <Col xs="6" style={{ marginTop: "15px", marginBottom: "30px" }}>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText style={{ fontSize: "12px" }}>
                  Electric Cost
                </InputGroupText>
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
          <Col xs="6" style={{ marginTop: "15px", marginBottom: "30px" }}>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText style={{ fontSize: "12px" }}>
                  USD Profit/Mo.
                </InputGroupText>
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
