import { Component } from 'react';
import { Button, Modal, Card } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Brian from '../images/bk.jpg';
import Jacob from '../images/jg.jpg';
import Valton from '../images/vj.jpg';
import Dario from '../images/dv.jpg';
import '../AboutUs.css';



class Author {
	constructor(name, favorites, id) {
		this.name = name;
		this.favorites = favorites;
		this.id = id;
	}
}

export default class AboutUs extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: false,
			selectedAuthor: {},
			authorsArray: [
				new Author('Valton Jones', 'Grand Canyon', 13),
				new Author('Jacob Gregor', 'Arches National Park', 7),
				new Author('Dario V', 'Yosemite, no contest.', 83),
				new Author('Brian Kasprzyk', 'Olympic', 19),
			],
		};
	}

	handleShow = (id) => {
		const selectedOne = this.state.authorsArray.find(
			(author) => id === author.id
		);
		console.log(selectedOne);
		console.log(this.state.authorsArray);
		this.setState({ selectedAuthor: selectedOne });
		this.setState({ selected: true });
	};
	handleHide = () => {
		this.setState({ selected: false, selectedAuthor: {} });
	};

	

	render() {
		return (
			<>
			<div className="lineUp">
				<Image className="photo" onClick={() => this.handleShow(13)} src={Valton} roundedCircle />
				<Image className="photo" onClick={() => this.handleShow(7)} src={Jacob} roundedCircle />
				<Image className="photo" onClick={() => this.handleShow(83)} src={Dario} roundedCircle />
				<Image className="photo" onClick={() => this.handleShow(19)} src={Brian} roundedCircle />
				</div>

				<Modal show={this.state.selected} onHide={this.handleHide}>
					<Modal.Header closeButton>
						<Modal.Title>Inspect Author:</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						{this.state.selectedAuthor && (
							<Card>
								<Card.Body>
									<Card.Title>{this.state.selectedAuthor.name}</Card.Title>
									<Card.Text>{this.state.selectedAuthor.favorites}</Card.Text>
								</Card.Body>
							</Card>
						)}
					</Modal.Body>
					<Modal.Footer>
						<Button variant='secondary' onClick={this.handleHide}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
			</>
		);
	}
}
