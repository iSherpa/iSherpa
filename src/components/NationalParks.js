import { Component } from "react";
import axios from "axios";
import Image from 'react-bootstrap/Image'
let NP_API = process.env.REACT_APP_NP_API_URI; 


// ------------------------------------------- Notes for this Page -----------------------------------------------------------//
// If you want to access specific data from the parksData[] you will need to use this format
// -> this.state.parkData.data[0].fullName - This will go into the parkData -> data[] -> data[0] -> {} -> fullName:....
// ^^ this is just an ecxample you can grab anything from the data that is just how you would grab the fullname for the first object.



export default class NationalParks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parkData: undefined
    };
  }  
  
   getNationalParks = async () => {
    let stateCode = "WA"
    const response = await axios.get(`${NP_API}?stateCode=${stateCode}&api_key=${process.env.REACT_APP_NP_API_KEY}`);
    // console.log(response.data.data[0].fullName) -> Remove Later
    this.setState({parkData: response.data});
    // console.log(this.state.parkData.data[0].fullName) -> Remove later
  }

  render() {
    console.log(this.state); 
    // by console.log(this.state) this will tell us what the current state of our application is on its initial render(). Anytime our state changes it will cause a re-render() and this console.log() will fire updating us with our current state! this is a neat trick i learned and worth remembering. 
    return (
        <>
        <h1>You are on NationalParks</h1>
        <button onClick={this.getNationalParks}>Get National Parks Data</button>
        <>
          {this.state.parkData ? <Image src={this.state.parkData.data[0].images[0].url} alt={this.state.parkData.data[0].description}/> : console.log('wtf')}
        </>
        </>
  );
  }
}
// src={this.state.parkData.data[0].images} alt={this.state.parkData.data[0].description}

