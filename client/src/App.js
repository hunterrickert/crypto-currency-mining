import React from 'react';
import Home from "./pages/Home";
import POW from "./pages/POW";
import POS from "./pages/POS";
import News from "./pages/News";
import Calculator from "./pages/Calculator";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation"

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route path="/pow" component={POW} />
        <Route path="/pos" component={POS} />
        <Route exact path="/news" component={News} />
        <Route exact path="/calculator" component={Calculator} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
