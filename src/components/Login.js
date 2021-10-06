import { Component } from "react";
import Card from 'react-bootstrap/Card'
import LoginButton from './buttons/LoginButton'


class Login extends Component{

  render(){
    return(
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Welcome to iSherpa!</Card.Title>
          <Card.Text>
            Please login below.
          </Card.Text>
          <LoginButton />
        </Card.Body>
      </Card>
    )
  }
}

export default Login;