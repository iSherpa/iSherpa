import { Component } from "react";
import Navbar from "react-bootstrap/Navbar";


export default  class Footer extends Component {
  
  
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>{this.props.text}</Navbar.Brand>
      </Navbar>
    );
  }
}





