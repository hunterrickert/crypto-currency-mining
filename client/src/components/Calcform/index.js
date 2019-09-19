import React from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Col,
    Row
} from 'reactstrap';

export default class Calcform extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }
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
                                <Label for="volumeFilter">Volume Filter</Label>
                                <Input type="select" name="select" id="volumeFilter">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col xs="6">
                            <FormGroup>
                                <Label for="sortBy">Sort By</Label>
                                <Input type="select" name="select" id="sortBy">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col xs="6">
                            <FormGroup>
                                <Label for="difficultyofRevenue">Difficulty of Revenue</Label>
                                <Input type="select" name="select" id="difficultyofRevenue">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
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
                            <Button>Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}