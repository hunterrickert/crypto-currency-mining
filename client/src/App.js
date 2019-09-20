import React from 'react';
import Home from "./pages/Home";
import POW from "./pages/POW";
import POS from "./pages/POS";
import News from "./pages/News";
import Calculator from "./pages/Calculator";
import Signup from "./pages/SignUpForm";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import axios from "axios"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loggedin: false,
      email: null
    }
    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    //this.updateUser = this.updateUser.bind(this)


  }
  getToken = () => {
    let token = localStorage.getItem("token");
    console.log(token);
  }

  getUser() {
    this.getToken()

    axios.get('/v1/user/info').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')
        this.setState({
          loggedIn: true,
          email: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          email: null
        })
      }
    })
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser = (userObject) => {
    this.setState(userObject)
  }


  render() {
    return (
      <Router>
        <div>
          <Navigation updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route path="/pow" component={POW} />
          <Route path="/pos" component={POS} />
          <Route exact path="/news" component={News} />
          <Route exact path="/calculator" component={Calculator} />
          {/* <Route path="/signup" component={Signup} /> */}
          <Route path="/signup" render={props => (
            <Signup
              updateUser={this.updateUser}
            />
          )} />
          <Route path="/login" render={props => (
            <Login
              updateUser={this.updateUser}
            />
    )} />
        </div>
      </Router>
    );
  }
}

export default App;
