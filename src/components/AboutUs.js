import { Component } from "react";
import Image from 'react-bootstrap/Image';
import Button from "react-bootstrap/Button";
import  Modal  from "react-bootstrap/Modal";
import  Card  from "react-bootstrap/Card";


class Author {
  constructor (name, favorites, id)   {
  this.name = name;
  this.favorites = favorites;
  this.id = id;
  // this.parkImg = parkImg;
  
 };}

export default class AboutUs extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      selectedAuthor: {},
      authorsArray: [
        new Author ('Valton Jones' , 'Grand Canyon', 13),
     new Author ('Jacob Gregor' , 'Arches National Park', 7),
     new Author ('Dario V' , 'Yosemite, no contest.', 83),
      new Author ('Brian Kasprzyk' , 'Olympic', 19)
      ] 
    }
    
  }
  
  // displayAuthor() {

  //   const authorsArray= [];

  //    function author(name, favorites, id)   {
  //     this.name = name;
  //     this.favorites = favorites;
  //     this.id = id;
  //     // this.parkImg = parkImg;
      
  //    };
     
  //    authorsArray.push(new author ('Valton Jones' , 'Grand Canyon', 13));
  //    authorsArray.push(new author ('Jacob Gregor' , 'favorite park of Jacob', 7));
  //    authorsArray.push(new author ('Dario V' , 'favorite park of Dario', 11));
  //    authorsArray.push( new author ('Brian Kasprzyk' , 'Olympic', 19));
     
  //   this.setState({authorsArray : authorsArray});
  //   }
    // console.log(authorsArray);
    // [show, setShow] = useState(false);
    // handleClose = () => setShow(false);
    // handleShow = () => setShow(true);
  
    handleShow = (id) => {
      const selectedOne = this.state.authorsArray.find(author => id === author.id)
      console.log(selectedOne);
      console.log(this.state.authorsArray);
      this.setState({selectedAuthor:selectedOne});
      this.setState({selected: true })
      // console.log(this.selectedAuthor);
    }
    handleHide = () => {
      this.setState({selected: false, selectedAuthor: {}})
      
    }
    // handleChange = ( author) => {
      // this.setState({selectedAuthor: author})
    // }

    // <SelectedBeastModal beast={this.state.selectedBeast} handleHide={this.handleHide} show={this.state.selected}/>

  render() {
    return (
        <>
        
        
          <Image onClick={() => this.handleShow(13)}  src='http://placekitten.com/200/200
' roundedCircle/>   
          <Image onClick={() => this.handleShow(7)} src="http://placekitten.com/200/200
" roundedCircle/>             
          <Image onClick={() => this.handleShow(83)} src="http://placekitten.com/200/200
" roundedCircle/>
          <Image onClick={() => this.handleShow(19)} src="http://placekitten.com/200/200
" roundedCircle/>
      
      <Modal  show={this.state.selected} onHide={this.handleHide}>
        <Modal.Header closeButton>
          <Modal.Title>Inspect Author:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
              
                {/* <Card.Img variant="top" src={this.props.selectedAuthor.parkImg} alt={this.props.selectedAuthor.name} /> */}
                {this.state.selectedAuthor &&
                <Card>
                <Card.Body>
                  <Card.Title>{this.state.selectedAuthor.name}</Card.Title>
                  <Card.Text>
                  {this.state.selectedAuthor.favorites}
                  </Card.Text>
                </Card.Body>
                 </Card> 
                }
                
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleHide}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>          
   );
  }
  }