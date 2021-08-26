import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

function Home({ consumables }) {
	return (
		<section className="col-md-8">
			<Card>
				<CardBody className="text-center">
					<CardTitle>
						<h3 className="font-weight-bold">Welcome to Silicon Valley's premier dive cafe!</h3>
					</CardTitle>
					<span>
						{consumables.snacks.length} Snack Items and {consumables.drinks.length} Drink Items
					</span>
				</CardBody>
			</Card>
		</section>
	);
}

export default Home;
