import React from 'react';
import {
    Container,
    Row
} from 'reactstrap';
import LoginForm from "../components/LoginForm"


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
                    <LoginForm />
                </Row>
            </Container>
        </div>
    );
}

export default Login;