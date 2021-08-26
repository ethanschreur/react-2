import React from 'react';
import { Link } from 'react-router-dom';
import './FoodMenu.css';
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from 'reactstrap';

function ConsumableMenu({ consumables, type }) {
	return (
		<section className="col-md-4">
			<Card>
				<CardBody>
					<CardTitle className="font-weight-bold text-center">Food Menu</CardTitle>
					<CardText>
						Some quick example text to build on the card title and make up the bulk of the card's content.
					</CardText>
					<ListGroup>
						{consumables.map((cons) => (
							<Link to={`/${type}/${cons.id}`} key={cons.id}>
								<ListGroupItem>{cons.name}</ListGroupItem>
							</Link>
						))}
					</ListGroup>
					<br />
					<Link to={`/${type}/new`}>Add new {type}</Link>
				</CardBody>
			</Card>
		</section>
	);
}

export default ConsumableMenu;
