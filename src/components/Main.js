import { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header'
import NationalParks from "./NationalParks";
import SavedActivities from "./SavedActivities";
import AboutUs from "./AboutUs";
import Login from './Login'


class Main extends Component {
  
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    console.log(this.state);
    console.log(this.props.auth0.user)
    return (
      <>
        <Router>
          <Header />
          <Switch>
            {/* Main Route -> User to National Parks DB Search */}
            <Route exact path="/"> {this.props.auth0.isAuthenticated ? ( <NationalParks /> ) : ( <Login />)} </Route>
            {/* Route User to Saved Parks */}
            <Route path="/My-Trips">{this.props.auth0.isAuthenticated  ? ( <SavedActivities userInfo={this.props.auth0.user} /> ):( <Login />)} </Route>
            {/* Route User to AboutUs page */}
            <Route path="/About-Us">{this.props.auth0.isAuthenticated ? <AboutUs /> : <Login />} </Route>
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

  