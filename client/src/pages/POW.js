import React from "react";
import Heading from "../components/Jumbotron";
import { Container, Row, Col } from "reactstrap";
import Githublink from "../components/Githublink";

function POW() {
  return (
    <div
      style={{
        backgroundImage: `url(https://images.wallpaperscraft.com/image/cube_dark_texture_shape_119956_300x168.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        minWidth: "450px"
      }}
    >
      <Heading />
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col
            xs="9"
            style={{
              color: "white"
            }}
          >
            <h1>Proof of Work (PoW)</h1>
            <hr />
            <p>
              A proof of work is a piece of data which is difficult (costly,
              time-consuming) to produce but easy for others to verify and which
              satisfies certain requirements. Producing a proof of work can be a
              random process with low probability so that a lot of trial and
              error is required on average before a valid proof of work is
              generated. Bitcoin uses the Hashcash proof of work system.
            </p>
          </Col>
          <Col
            xs="3"
            className="block-example border-left border-light"
            style={{
              color: "white"
            }}
          >
            <h6>Additional Resources:</h6>
            <p>
              <a
                style={{ color: "white" }}
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.investopedia.com/terms/p/proof-work.asp"
              >
                Investopedia
              </a>
            </p>
            <p>
              <a
                style={{ color: "white" }}
                rel="noopener noreferrer"
                target="_blank"
                href="https://cryptoslate.com/cryptos/proof-of-work/"
              >
                Cryptoslate
              </a>
            </p>
          </Col>
        </Row>
      </Container>
      <div
        className="footer"
        style={{
          padding: "70px"
        }}
      ></div>
      <br />
      <Githublink />
    </div>
  );
}

export default POW;
