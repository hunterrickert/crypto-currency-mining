import React from "react";
import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';
import Calcform from "../components/Calcform";


function Calculator() {
        return (
            <div>
                <Container style={{
                    marginTop: "100px"
                }}>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 0 }}>
                            <h3>Mining Calculator <Button className="float-right">Reset</Button></h3>
                            <hr />
                            <Calcform />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
}

export default Calculator;