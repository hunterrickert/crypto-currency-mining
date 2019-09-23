import React from "react";
import Heading from "../components/Jumbotron";
import {
  Container,
  Row,
  Col
} from 'reactstrap';

function POS() {
  return (
    <div style={{
      backgroundImage: `url(https://images.wallpaperscraft.com/image/cube_dark_texture_shape_119956_300x168.jpg)`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      minWidth: "450px"
    }}>
      <Heading />
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col xs="9"
          style={{
            color: "white"
          }}>
            <h1>Proof of Stake (PoS)</h1>
            <hr />
            <p>
            The proof of stake was created as an alternative to the proof of work (PoW), proof of stake attributes mining power to the proportion of coins held by a miner. This way, instead of utilizing energy to answer PoW puzzles, a PoS miner is limited to mining a percentage of transactions that is reflective of his or her ownership stake. For instance, a miner who owns 3% of the CryptoCurrency available can theoretically mine only 3% of the blocks.
            </p>
          </Col>
          <Col xs="3" className="block-example border-left border-light"
          style={{
            color: "white"
          }}>
            <h6>Additional Resources:</h6>
            <p><a style={{color: "white"}} rel="noopener noreferrer" target="_blank" href="https://cryptoslate.com/cryptos/proof-of-stake/">Cryptoslate</a></p>
            <p><a style={{color: "white"}} rel="noopener noreferrer" target="_blank" href="https://www.investopedia.com/terms/p/proof-stake-pos.asp">Investopedia</a></p>
          </Col>
        </Row>
      </Container>
      <div className="footer" style={{
        padding: "45px"
      }}></div>
    </div>
  );
}

export default POS;
