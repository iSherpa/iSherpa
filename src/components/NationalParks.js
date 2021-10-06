import { Component } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
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
  
  componentDidMount(){
    this.getNationalParks();
  }



   getNationalParks = async () => {
     try{
      let stateCode = "WA"
      const response = await axios.get(`${NP_API}?stateCode=${stateCode}&api_key=${process.env.REACT_APP_NP_API_KEY}`);
      this.setState({parkData: response.data});
    } catch (error) {
      console.log(error)
    }
    // console.log(response.data.data[0].fullName) -> Remove Later
    // console.log(this.state.parkData.data[0].fullName) -> Remove later
  }

  render() {
    console.log(this.state); 
    // by console.log(this.state) this will tell us what the current state of our application is on its initial render(). Anytime our state changes it will cause a re-render() and this console.log() will fire updating us with our current state! this is a neat trick i learned and worth remembering. 
    return (
      <>
      <Row xs={1} md={1} lg={1} className="g-4">
      {this.state.parkData ? this.state.parkData.data.map((park,index) => {
        return(
          <>
          <Card style={{ width: '100%' }} key={index}>
              <Card.Img variant="top" src={park.images[1].url} />
              <Card.Body>
                <Card.Title>{park.fullName}</Card.Title>
                <Card.Text><b>{park.designation}</b></Card.Text>
                <Card.Text>{park.description}</Card.Text>
                <Card.Text>Check out these Local Activities! {park.activities[0].name}</Card.Text>
                <Card.Text>{park.directionsInfo}</Card.Text>
                <Button variant="primary">This will be the "Save" Button</Button>
              </Card.Body>
            </Card>
            </>
            )})
          : 
          <>
          <h1>Sorry There are no parks matching that description, please search again..</h1> 
          <button onClick={this.getNationalParks}>Get National Parks Data</button>
          </>}
      </Row>
      </>
    );
  }  
}
      
/* {this.state.parkData ? <Image src={this.state.parkData.data[0].images[0].url} alt={this.state.parkData.data[0].description}/> : console.log('wtf')} */

