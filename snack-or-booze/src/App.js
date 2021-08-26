import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Home';
import SnackOrBoozeApi from './Api';
import NavBar from './NavBar';
import { Route, Switch } from 'react-router-dom';
import ConsumableMenu from './ConsumableMenu';
import ConsumableForm from './ConsumableForm';
import Snack from './FoodItem';

function App() {
	const [ isLoading, setIsLoading ] = useState(true);
	const [ consumables, setConsumables ] = useState([]);

	useEffect(() => {
		async function getConsumables() {
			let snacks = await SnackOrBoozeApi.getConsumables('snacks');
			let drinks = await SnackOrBoozeApi.getConsumables('drinks');
			setConsumables({ drinks, snacks });
			setIsLoading(false);
		}
		getConsumables();
	}, []);

	const addToConsumables = async (type, consumableData) => {
		await SnackOrBoozeApi.postConsumables(type, consumableData);
	};

	if (isLoading) {
		return <p>Loading &hellip;</p>;
	}

	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<main>
					<Switch>
						<Route exact path="/">
							<Home consumables={consumables} />
						</Route>
						<Route exact path="/snacks">
							<ConsumableMenu consumables={consumables.snacks} type="snacks" title="Snacks" />
						</Route>
						<Route exact path="/drinks">
							<ConsumableMenu consumables={consumables.drinks} type="drinks" title="Drinks" />
						</Route>
						<Route exact path="/snacks/new">
							<ConsumableForm type="snacks" addToConsumables={addToConsumables} />
						</Route>
						<Route exact path="/drinks/new">
							<ConsumableForm type="drinks" addToConsumables={addToConsumables} />
						</Route>
						<Route path="/snacks/:id">
							<Snack items={consumables.snacks} cantFind="/snacks" />
						</Route>
						<Route path="/drinks/:id">
							<Snack items={consumables.drinks} cantFind="/drinks" />
						</Route>
						<Route>
							<p>Hmmm. I can't seem to find what you want.</p>
						</Route>
					</Switch>
				</main>
			</BrowserRouter>
		</div>
	);
}

export default App;
