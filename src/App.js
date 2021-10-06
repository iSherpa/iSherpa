import React from 'react';
import { withAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";
// import Footer from "./components/Footer";
// import Header from "./components/Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parksDisplay: []
    };
  }  

  render () {
    return (
      <>
        {/* Might render a <Header /> here. */}
        <Main  />  
        {/* Might render a <Footer /> here */}
      </>  
    );
  }
}
export default withAuth0(App);


