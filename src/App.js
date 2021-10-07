import React from 'react';
import { withAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }  
  
  render () {
    return (
      <>
        <Main  />  
      </>  
    );
  }
}
export default withAuth0(App);


