import { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
let server = `${process.env.REACT_APP_API}/my-parks`

class SavedActivities extends Component{
  constructor(props){
    super(props)
    this.state = {
    userEmail: this.props.userInfo.email,
    savedParks: undefined,
    }
  };
  
  async componentDidMount(){
    let url = `${server}?email=${this.state.userEmail}`
    try{
      const savedParksData = await axios.get(url)
      this.setState({savedParks: savedParksData})
    }catch(error){
      console.log(error)
    }
  }

  render() {
    console.log(this.state); 
    // by console.log(this.state) this will tell us what the current state of our application is on its initial render(). Anytime our state changes it will cause a re-render() and this console.log() will fire updating us with our current state! this is a neat trick i learned and worth remembering. 
    return (
      <>
      <Row xs={1} md={1} lg={1} className="g-4">
      {this.state.savedParks ? this.state.savedParks.data.map((park,index) => {
        console.log(park)
        return(
          <>
          <Card style={{ width: '100%' }} >
              <Card.Img variant="top" src={park.images} />
              <Card.Body key={index}>
                <>
                <Card.Title><b>{park.fullName}</b></Card.Title>
                </>
                <>
                <Card.Text><b>Park Designation</b></Card.Text>
                <Card.Text>{park.designation}</Card.Text>
                </>
                <>
                <Card.Text><b>Park Information</b></Card.Text>
                <Card.Text>{park.description}</Card.Text>
                </>
                <>
                <Card.Text><b>Local Activities</b></Card.Text>
                <Card.Text>{park.activities[0]}</Card.Text>
                <Card.Text>{park.activities[1]}</Card.Text>
                <Card.Text>{park.activities[2]}</Card.Text>
                </>
                <>
                <Card.Text><b>Directions</b></Card.Text>
                <Card.Text>{park.directionsInfo}</Card.Text>
                </>
                <>
                <Card.Text><b>Contacts:</b></Card.Text>
                <Card.Text>Email: {park.contactsEmail}</Card.Text>
                <Card.Text>Phonenumber: {park.contactsPhone}</Card.Text>
                </>
                {/* UpdateButton */}
                {/* DeleteButton */}
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

export default withAuth0(SavedActivities);