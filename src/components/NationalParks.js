import { Component } from "react";
import axios from "axios";

let API_SERVER = process.env.REACT_APP_API; 


export default class NationalParks extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      parksDisplay: []
    };
  }  
  


   getNationalParks = async () => {
    const response = await axios.get(`${API_SERVER}/parks`);
    this.setState({parks: response.data});
  }


  render() {
    return (
        <>

          {/* insert array of cards returned from search of National Parks by State */}

        </>
  );
  }
}


