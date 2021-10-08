import { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Card, Row, Form, Col } from 'react-bootstrap/';
import SaveButton from './buttons/SaveButton';
let NP_API = process.env.REACT_APP_NP_API_URI;

class NationalParks extends Component {
	constructor(props) {
		super(props);
		this.state = {
			parkData: undefined,
		};
	}

	getNationalParks = async (stateCode) => {
		try {
			console.log();
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
		let stateCode = event.target.value;
		this.getNationalParks(stateCode);
	};

	render() {
		console.log(this.state);
		return (
			<>
				<Row xs={1} md={4} lg={4} className='g-4'>
					{this.state.parkData ? (
						this.state.parkData.data.map((park, index) => {
							return (
								<>
									<Card style={{ width: '30rem' }} key={index}>
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
							<Card style={{ width: '18rem' }}>
								<Card.Body>
									<Card.Title>Welcome to iSherpa!</Card.Title>
									<Card.Text>
										iSherpa is here to be your guide for tracking and planning
										your next National Park visit. Whether you are visiting a
										National Parks in your home state or planning a trip across
										the country keeping track of exactly what you need to know
										about each park has never been so easy! Just select the
										state you are visiting from the list below and begin
										creating a trip Itinerary today!{' '}
									</Card.Text>
									<Form>
										<Form.Group as={Col} controlId='formGridState'>
											<Form.Label>State</Form.Label>
											<Form.Select
												onChange={this.searchQuery}
												defaultValue='Select a state...'
											>
												<option value='AL'>Alabama</option>
												<option value='AK'>Alaska</option>
												<option value='AZ'>Arizona</option>
												<option value='AR'>Arkansas</option>
												<option value='CA'>California</option>
												<option value='CO'>Colorado</option>
												<option value='CT'>Connecticut</option>
												<option value='DE'>Delaware</option>
												<option value='DC'>District of Columbia</option>
												<option value='FL'>Florida</option>
												<option value='GA'>Georgia</option>
												<option value='HI'>Hawaii</option>
												<option value='ID'>Idaho</option>
												<option value='IL'>Illinois</option>
												<option value='IN'>Indiana</option>
												<option value='IA'>Iowa</option>
												<option value='KS'>Kansas</option>
												<option value='KY'>Kentucky</option>
												<option value='LA'>Louisiana</option>
												<option value='ME'>Maine</option>
												<option value='MD'>Maryland</option>
												<option value='MA'>Massachusetts</option>
												<option value='MI'>Michigan</option>
												<option value='MN'>Minnesota</option>
												<option value='MS'>Mississippi</option>
												<option value='MO'>Missouri</option>
												<option value='MT'>Montana</option>
												<option value='NE'>Nebraska</option>
												<option value='NV'>Nevada</option>
												<option value='NH'>New Hampshire</option>
												<option value='NJ'>New Jersey</option>
												<option value='NM'>New Mexico</option>
												<option value='NY'>New York</option>
												<option value='NC'>North Carolina</option>
												<option value='ND'>North Dakota</option>
												<option value='OH'>Ohio</option>
												<option value='OK'>Oklahoma</option>
												<option value='OR'>Oregon</option>
												<option value='PA'>Pennsylvania</option>
												<option value='PR'>Puerto Rico</option>
												<option value='RI'>Rhode Island</option>
												<option value='SC'>South Carolina</option>
												<option value='SD'>South Dakota</option>
												<option value='TN'>Tennessee</option>
												<option value='TX'>Texas</option>
												<option value='UT'>Utah</option>
												<option value='VT'>Vermont</option>
												<option value='VA'>Virginia</option>
												<option value='VI'>Virgin Islands</option>
												<option value='WA'>Washington</option>
												<option value='WV'>West Virginia</option>
												<option value='WI'>Wisconsin</option>
												<option value='Wy'>Wyoming</option>
											</Form.Select>
										</Form.Group>
									</Form>
								</Card.Body>
							</Card>
						</>
					)}
				</Row>
			</>
		);
	}
}
export default withAuth0(NationalParks);
