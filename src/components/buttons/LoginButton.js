// import { useAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button'
import { Component } from 'react';

class LoginButton extends Component {
  // const {
  //   isAuthenticated,
  //   loginWithRedirect,
  // } = useAuth0();
  
render() {
    return ( 
      <Button onClick={() => this.props.handleUser()}>Login</Button>
    )
  }
}

export default LoginButton;

// !isAuthenticated &&