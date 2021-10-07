import {Component} from 'react'
import { withAuth0 } from "@auth0/auth0-react";
import axios from 'axios'
import Button from 'react-bootstrap/Button'
let server = `${process.env.REACT_APP_API}/my-parks/`


class DeleteButton extends Component {


  handleClick = async() =>{
    const parkId = this.props.parkData._id;
    console.log(parkId);
    try {
      await axios.delete(server + ":?id=" + parkId);
    }
    catch (error) {
      console.log(error);
    }
    
 }

  render(){
    return(
      <>
      <Button onClick={this.handleClick} >Delete my trip</Button>
      </>
    )
  }
};

export default withAuth0(DeleteButton);