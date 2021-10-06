import { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";
import Header from './Header'
import NationalParks from "./NationalParks";
import SavedActivities from "./SavedActivities";
import AboutUs from "./AboutUs";
import Login from './Login'


class Main extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      parksDisplay: []
    };
  }

  render() {
    console.log(this.state);
    return (
      <>
        <Router>
          <Header />
          <Switch>
            {/* Main Route -> User to National Parks DB Search */}
            <Route exact path="/"> {this.props.auth0.isAuthenticated ? ( <NationalParks /> ) : ( <Login />)} </Route>
            {/* Route User to Saved Parks */}
            <Route path="/Profile">{this.props.auth0.isAuthenticated ?( <SavedActivities /> ):( <Login />)} </Route>
            {/* Route User to AboutUs page */}
            <Route path="/">{this.props.auth0.isAuthenticated ? <AboutUs /> : <Login />} </Route>
            {/* Route to Update Books */}
            {/* <Route path="/"> {this.props.auth0.isAuthenticated ? <UpdateBooks /> : <Login />} </Route>
            {/* Route to Profile */}
            {/* <Route path="/"> {this.props.auth0.isAuthenticated ? (<Profile /> ): (<Login />)} </Route> */} 
          </Switch>
          {/* <Footer /> */}
        </Router>
      </>
    )
  }
  }
  export default withAuth0(Main);
  