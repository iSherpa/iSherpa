import { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import SaveButton from './buttons/SaveButton';
import Row from 'react-bootstrap/Row';
let NP_API = process.env.REACT_APP_NP_API_URI;

class NationalParks extends Component {
	constructor(props) {
		super(props);
		this.state = {
			parkData: undefined,
			search: undefined,
		};
	}

	componentDidMount() {
		this.getNationalParks();
	}
	// TO-DO -> Get a search query involved so we stop hardCoding WA... Add this function to componentDidMount();
	getNationalParks = async () => {
		try {
			let stateCode = 'WA';
			const response = await axios.get(
				`${NP_API}?stateCode=${stateCode}&api_key=${process.env.REACT_APP_NP_API_KEY}`
			);
			this.setState({
				parkData: response.data,
			});
		} catch (error) {
			console.log(error);
		}
	};

	searchQuery = (event) => {
		event.preventDefault();
		console.log(event);
		// this.setState({
		// 	search: event.target.value
		// })
	};

	render() {
		console.log(this.state);
		return (
			<>
			{ this.state.search ?
				<Row xs={1} md={1} lg={1} className='g-4'>
					{this.state.parkData ? (
						this.state.parkData.data.map((park, index) => {
							console.log(park);
							return (
								<>
									<Card style={{ width: '100%' }} key={index}>
										<Card.Img variant='top' src={park.images[1].url} />
										<Card.Body>
											<>
												<Card.Title>
													<b>{park.fullName}</b>
												</Card.Title>
											</>
											<>
												<Card.Text>
													<b>Park Designation</b>
												</Card.Text>
												<Card.Text>{park.designation}</Card.Text>
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
												<Card.Text>{park.activities[0].name}</Card.Text>
												<Card.Text>{park.activities[1].name}</Card.Text>
												<Card.Text>{park.activities[2].name}</Card.Text>
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
												<Card.Text>
													Email: {park.contacts.emailAddresses[0].emailAddress}
												</Card.Text>
												<Card.Text>
													Phonenumber:{' '}
													{park.contacts.phoneNumbers[0].phoneNumber}
												</Card.Text>
											</>
											<SaveButton parkData={park} />
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
				</Row> : }
			</>
		);
	}
}
export default withAuth0(NationalParks);
