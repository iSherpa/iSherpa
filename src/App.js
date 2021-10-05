import Main from "./components/Main";
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Header from "./components/Header";




class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }  



  render () {


  return (
      <>
        <Router>
          <Header/>
            <Switch>
            < Route exact path="">
              {/* <LoginButton /> */}
                <Main user={this.state.user} />
               </Route>
               <Route path="">
              {/* <Profile/> */}
             </Route>
           </Switch>
         <Footer/>
      </Router>
    </>  
  );
  }
}
export default App;


