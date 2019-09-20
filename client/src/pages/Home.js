import React from "react";
import Heading from "../components/Jumbotron";
import {
  Container,
  Row,
  Col
} from 'reactstrap';

function Home() {
  return (
    <div style={{
      backgroundImage: `url(https://images.wallpaperscraft.com/image/cube_dark_texture_shape_119956_300x168.jpg)`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundAttachment: "fixed"
    }}>
      <Heading>
        <h1 style={{
          fontWeight: "bold",
          color: "white"
        }}>Home</h1>
        <h2 style={{
          color: "white"
        }}>Your journey starts here!</h2>
        <br />
        <br />
      </Heading>
      <Container style={{ marginTop: 30 }}>>
        <Row>
          <Col xs="12"
            style={{
              color: "white"
            }}>
            <h1>CryptoCurrency Mining Info</h1>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col xs="12"
            style={{
              color: "white"
            }}>
            <p>
              Cryptocurrency mining, or crypto-mining, is a process in which transactions for various forms of cryptocurrency are verified and added to the blockchain digital ledger.
            </p>
            <p>
              Each time a cryptocurrency transaction is made, a cryptocurrency miner is responsible for ensuring the authenticity of information and updating the blockchain with the transaction. The mining process itself involves competing with other cryptominers to solve complicated mathematical problems with cryptographic hash functions that are associated with a block containing the transaction data.
            </p>
            <p>
              This could sound very technical so let’s look at a similar process that we are more familiar with. When you go into a bank you usually speak with a bank teller that will update your account ledger at the bank based off of the transaction that you perform. If you deposit $100.00 into your bank account, the teller will update your bank account and record the deposit of $100.00. The teller serves as the trusted third party, they validate the transaction and update the ledger.
            </p>
            <p>
              Bitcoin doesn’t trust people because people are sketchy, so the traditional teller is replaced with a computer called a miner that does the same job the teller in a bank does without the sketchy sauce.
            </p>
          </Col>
        </Row>
        <br />
        <Row className="block-example border-top border-light"
          style={{
            color: "white"
          }}>
          <Col xs="12">
            <br />
            <h1>Full Access</h1>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet diam tortor, id
                  consequat mauris ullamcorper eu. Orci varius natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus. Pellentesque et dui id justo finibus
                  sollicitudin at et metus. Ut feugiat tellus nec metus commodo, sed suscipit nisi
                  gravida. Duis eget vestibulum quam, ut porttitor sem. Donec sagittis mi sollicitudin
                  turpis semper, et interdum risus lobortis. Vestibulum suscipit nunc non egestas
                  tristique. Proin hendrerit efficitur malesuada. Mauris lorem urna, sodales accumsan
                  quam non, tristique tempor erat. Nullam non sem facilisis, tempus tortor sit amet,
                  volutpat nisl. Ut et turpis non nunc maximus mollis a vitae tortor. Pellentesque
                  mattis risus ac quam laoreet cursus. Praesent suscipit orci neque, vestibulum
                  tincidunt augue tincidunt non. Duis consequat mattis tortor vitae mattis.
          </p>
          </Col>
        </Row>
      </Container>
      <div className="footer" style={{
        padding: "30px"
      }}></div>
    </div>
  );
}

export default Home;
