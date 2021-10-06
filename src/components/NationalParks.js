import { Component } from "react";
import axios from "axios";

let API_SERVER = process.env.REACT_APP_API; 


export default class NationalParks extends Component {

  constructor(props) {
    super(props);
    this.state = {
      parksDisplay: []
    };
  }  
  
   getNationalParks = async () => {
    const response = await axios.get(`${API_SERVER}/parks`);
    console.log(response)
    // this.setState({parksDisplay: response.data});
  }


  render() {
    console.log(this.state); 
    // by console.log(this.state) this will tell us what the current state of our application is on its initial render(). Anytime our state changes it will cause a re-render() and this console.log() will fire updating us with our current state! this is a neat trick i learned and worth remembering. 
    return (
        <>
          {/* We will map through the data above and render an accordian. Pair Programming w/ Brian or Valton or Both! */}
        </>
  );
  }
}


