import React from "react";
import Heading from "../components/Jumbotron";
import { Container, Row, Col } from "reactstrap";
import Githublink from "../components/Githublink";

function Home() {
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
        >
        <Row>
          <Col
            xs="12"
            style={{
              color: "white"
            }}
          >
            <h1>CryptoCurrency Mining Info</h1>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col
            xs="12"
            style={{
              color: "white"
            }}
          >
            <p>
              Cryptocurrency mining, or crypto-mining, is a process in which
              transactions for various forms of cryptocurrency are verified and
              added to the blockchain digital ledger.
            </p>
            <p>
              Each time a cryptocurrency transaction is made, a cryptocurrency
              miner is responsible for ensuring the authenticity of information
              and updating the blockchain with the transaction. The mining
              process itself involves competing with other cryptominers to solve
              complicated mathematical problems with cryptographic hash
              functions that are associated with a block containing the
              transaction data.
            </p>
            <p>
              This could sound very technical so let’s look at a similar process
              that we are more familiar with. When you go into a bank you
              usually speak with a bank teller that will update your account
              ledger at the bank based off of the transaction that you perform.
              If you deposit $100.00 into your bank account, the teller will
              update your bank account and record the deposit of $100.00. The
              teller serves as the trusted third party, they validate the
              transaction and update the ledger.
            </p>
            <p>
              Bitcoin doesn’t trust people because people are sketchy, so the
              traditional teller is replaced with a computer called a miner that
              does the same job the teller in a bank does without the sketchy
              sauce.
            </p>
          </Col>
        </Row>
        <br />
        <Row
          className="block-example border-top border-light"
          style={{
            color: "white"
          }}
        >
          <Col xs="12">
            <br />
            <h1>CryptoCurrency Mining Calculator</h1>
            <hr />
            <p>
              Now that you know the basics about CryptoCurrency mining, would
              you like to know if CryptoCurrency would be profitable for you?
              When you signup for a free account you will gain access to a
              CryptoCurrency miner that will allow you to calculate the
              profitability of mining Bitcoin or Ethereum based off of your
              specific costs.
            </p>
          </Col>
        </Row>
      </Container>
      <div
        className="footer"
        style={{
          padding: "30px"
        }}
      ></div>
      <Githublink />
    </div>
  );
}

export default Home;
