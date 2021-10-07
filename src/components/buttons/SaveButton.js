import {Component} from 'react'
import { withAuth0 } from "@auth0/auth0-react";
import axios from 'axios'
import Button from 'react-bootstrap/Button'
let server = `${process.env.REACT_APP_API}/my-parks`


class SaveButton extends Component {
  
savePark = async (parkInfo) => await axios.post(server,parkInfo);
  handleClick = () =>{
    const parkInfo = this.props.parkData
    let passedPark = {
      fullName: parkInfo.fullName,
      email: this.props.auth0.user.email,
      description: parkInfo.description,
      activities: [parkInfo.activities[0].name,parkInfo.activities[1].name, parkInfo.activities[2].name],
      stateCode: parkInfo.states,
      directionsInfo: parkInfo.directionsInfo,
      contactsEmail: parkInfo.contacts.emailAddresses[0].emailAddress,
      contactsPhone: parkInfo.contacts.phoneNumbers[0].phoneNumber,
      notes: '',
      images: parkInfo.images[1].url
    }
    console.log(passedPark);
    this.savePark(passedPark);
  }

  render(){
    return(
      <>
      <Button onClick={this.handleClick} >Save to MyTrip</Button>
      </>
    )
  }
};

export default withAuth0(SaveButton);