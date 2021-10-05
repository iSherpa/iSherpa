//import axios from "axios";
import { Component } from "react";
import Container from "react-bootstrap/Container";
//import { withAuth0 } from "@auth0/auth0-react";
import NationalParks from "./NationalParks";
import SavedActivities from "./SavedActivities";
import AboutUs from "./AboutUs";


class Main extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      parksDisplay: []
    };
  }





  render () {
  
  
    return (
       
    <Container fluid>
      <NationalParks/>
      <SavedActivities/>
      <AboutUs/>
      

    </Container>
          
       
    );
  }
  }
  export default Main;
  