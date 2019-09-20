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

export default class Calcform extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      blkReward: 3
    };
  }

  handleSubmit = () => {
    let reward =
      ((this.state.hashrate / this.props.ethHash) *
        144 *
        this.state.blkReward *
        30) /
      (2.2).toFixed(8);
    alert(`monthly eth mined: ${reward} ETH`);

    let rewardUsd = `${reward}` * this.props.ethPrice;
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
                  <span href="#" id="costexplain1">
                    Cost ($/kWh)
                  </span>
                </Label>
                <UncontrolledTooltip placement="top" target="costexplain1">
                  Hello world!
                </UncontrolledTooltip>
                <Input type="text" name="text" id="cost" />
              </FormGroup>
            </Col>
            <Col xs="6">
              <FormGroup>
                <Label for="watts">
                  <span href="#" id="wattsexplain1">
                    Watts
                  </span>
                </Label>
                <UncontrolledTooltip placement="top" target="wattsexplain1">
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
                  <span href="#" id="hashexplain1">
                    Hash Rate GH/s
                  </span>
                </Label>
                <UncontrolledTooltip placement="top" target="hashexplain1">
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
                  <span href="#" id="difficultyexplain1">
                    Difficulty
                  </span>
                </Label>
                <UncontrolledTooltip
                  placement="top"
                  target="difficultyexplain1"
                >
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
                  <span href="#" id="blockrewardexplain1">
                    Block Reward
                  </span>
                </Label>
                <UncontrolledTooltip
                  placement="top"
                  target="blockrewardexplain1"
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
