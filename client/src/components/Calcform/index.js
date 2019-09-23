import React from "react";

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
import POW from "../../pages/POW";

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
    const reward =
      ((this.state.hashrate / this.props.btcHash) *
        3600 *
        24 *
        this.state.blkReward *
        30 *
        1000000000) /
      Math.pow(2, 32);
    // Electricity cost formula
    const electricCost =
      (this.state.watts / 1000) * 24 * this.state.cost * (30).toFixed(2);
    // USD Value formula
    const usdValue = this.props.btcPrice * reward;

    this.setState({
      reward,
      electricCost,
      usdValue,
      // USD Profit formula
      usdProfit: usdValue - electricCost
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
                  placeholder="1000"
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
                  placeholder="1400"
                ></Input>
              </FormGroup>
            </Col>
            <Col xs="6">
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
                <Label for="btcmined">Monthly BTC Mined</Label>
                <Input
                  onChange={this.handleSubmit}
                  type="text"
                  name="btcmined"
                  id="btcmined"
                  value={this.state.reward}
                  placeholder="0.00"
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label for="usdValue">USD Value</Label>
                <Input
                  onChange={this.handleSubmit}
                  type="text"
                  name="usdValue"
                  id="usdValue"
                  value={this.state.usdValue}
                  placeholder="0.00"
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label for="electricCost">Electricity Cost</Label>
                <Input
                  onChange={this.handleSubmit}
                  type="text"
                  name="electricCost"
                  id="electricCost"
                  value={this.state.electricCost}
                  placeholder="0.00"
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label for="usdprofit">Monthly USD Profit</Label>
                <Input
                  onChange={this.handleSubmit}
                  type="text"
                  name="usdprofit"
                  id="usdprofit"
                  value={this.state.usdProfit}
                  placeholder="0.00"
                ></Input>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
