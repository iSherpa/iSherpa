import { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import '../stylesheets/SavedActivities.css';
import axios from 'axios';
import { Card, Row } from 'react-bootstrap';
import DeleteButton from './buttons/DeleteButton';
import UpdateButton from './buttons/UpdateButton';
let server = `${process.env.REACT_APP_API}/my-parks`;

class SavedActivities extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userEmail: this.props.userInfo.email,
			savedParks: undefined,
		};
	}

	componentDidMount() {
		this.getNationalParks();
	}

	getNationalParks = async () => {
		let url = `${server}?email=${this.state.userEmail}`;
		try {
			const savedParksData = await axios.get(url);
			this.setState({ savedParks: savedParksData });
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		console.log(this.state);
		return (
			<>
				<Row xs={1} sm={2} md={3} lg={4} className='g-4'>
					{this.state.savedParks ? (
						this.state.savedParks.data.map((park, index) => {
							console.log(park);
							return (
								<>
									<Card style={{ width: '25rem' }}>
										<Card.Img variant='top' src={park.images} />
										<Card.Body key={index}>
											<>
												<Card.Title>
													<b>{park.fullName}</b>
												</Card.Title>
											</>
											<>
												<Card.Text>
													<b>Park Information</b>
												</Card.Text>
												<Card.Text>{park.description}</Card.Text>
											</>
											<>
												<Card.Text>
													<b>Local Activities</b>
												</Card.Text>
												<Card.Text>{park.activities[0]}</Card.Text>
												<Card.Text>{park.activities[1]}</Card.Text>
												<Card.Text>{park.activities[2]}</Card.Text>
											</>
											<>
												<Card.Text>
													<b>Directions</b>
												</Card.Text>
												<Card.Text>{park.directionsInfo}</Card.Text>
											</>
											<>
												<Card.Text>
													<b>Contacts:</b>
												</Card.Text>
												<Card.Text>Email: {park.contactsEmail}</Card.Text>
												<Card.Text>Phonenumber: {park.contactsPhone}</Card.Text>
											</>
											<>
												<Card.Text>
													<b>Notes:</b>
												</Card.Text>
												<Card.Text>{park.notes}</Card.Text>
											</>
											<div class='saved-buttons'>
												<UpdateButton
													parkData={park}
													update={this.getNationalParks}
												/>
												<DeleteButton
													parkData={park}
													update={this.getNationalParks}
												/>
											</div>
										</Card.Body>
									</Card>
								</>
							);
						})
					) : (
						<>
							<h1>
								Sorry There are no parks matching that description, please
								search again..
							</h1>
							<button onClick={this.getNationalParks}>
								Get National Parks Data
							</button>
						</>
					)}
				</Row>
			</>
		);
	}
}
export default withAuth0(SavedActivities);
