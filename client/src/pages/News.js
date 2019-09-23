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
      <div>
        <Heading>
          <h1 style={{
            fontWeight: "bold",
            color: "white"
          }}>News</h1>
          <h2 style={{
            color: "white"
          }}>READ ALL ABOUT IT!</h2>
          <br />
          <br />
        </Heading>
        <Container>
          <h1>Top News on Bitcoin:</h1>
          <br />
          {/* <SearchResults articles={this.state.articles} /> */}
        </Container>
      </div>
    );
  }
}

export default News;
