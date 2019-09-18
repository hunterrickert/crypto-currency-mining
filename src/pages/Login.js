import React from 'react';
import {
    Container,
    Row
} from 'reactstrap';
import Userform from "../components/Userform"


function Login() {
    return (
        <div>
            <Container style={{
                marginTop: "200px"
            }}>
                <Row>
                    <h1>Log In</h1>
                </Row>
                <Row>
                    <Userform />
                </Row>
            </Container>
        </div>
    );
}

export default Login;