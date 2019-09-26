import React from "react";
import { Container, Row } from "reactstrap";
import Userform from "../components/Userform";
import Githublink from "../components/Githublink";

function Signup(props) {
  return (
    <div>
      <div
        className="text-center"
        style={{
          backgroundImage: `url(https://images.wallpaperscraft.com/image/cube_dark_texture_shape_119956_300x168.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          padding: "20rem"
        }}
      >
        <Container
          className="border rounded"
          style={{
            backgroundColor: "white",
            padding: "40px",
            width: "675px"
          }}
        >
          <Row>
            <h1
              style={{
                marginBottom: "30px"
              }}
            >
              Sign up
            </h1>
          </Row>
          <Row>
            <Userform updateUser={props.updateUser} />
          </Row>
        </Container>
      </div>
      <Githublink />
    </div>
  );
}
export default Signup;
