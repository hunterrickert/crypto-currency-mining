import React, { Component } from "react";
import {
  Container
} from 'reactstrap';
// import SearchResults from "../components/SearchResults";
import Heading from "../components/Jumbotron";



class News extends Component {
  state = {
    articles: []
  };

  // componentDidMount() {
  //   ProxyApi.getTopNewsByCoin("bitcoin")
  //   .then(res => this.setState({ articles: res }))
  //   .catch(err => console.log(err));
  // }

  render() {
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
        <Container>
          <h1 style={{color: "white"}}>Top News on Bitcoin:</h1>
          <br />
          {/* <SearchResults articles={this.state.articles} /> */}
        </Container>
      </div>
    );
  }
}

export default News;
