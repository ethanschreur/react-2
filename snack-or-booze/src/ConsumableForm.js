import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, Input, Button } from 'reactstrap';
import { useState } from 'react';

function ConsumableForm({ type, addToConsumables }) {
	const initialFormData = { name: '', description: '', recipe: '', serve: '' };
	const [ formData, setFormData ] = useState(initialFormData);
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const handleSubmit = () => {
		addToConsumables(type, formData);
	};
	return (
		<section className="col-md-4">
			<Card>
				<CardBody>
					<CardTitle className="font-weight-bold text-center">Add new {type}</CardTitle>
					<br />
					<form onSubmit={handleSubmit}>
						<Input type="text" name="name" placeholder="Name" onChange={handleChange} />
						<br />
						<Input type="textarea" name="description" placeholder="Description" onChange={handleChange} />
						<br />
						<Input type="textarea" name="recipe" placeholder="Recipe" onChange={handleChange} />
						<br />
						<Input type="textarea" name="serve" placeholder="Serve" onChange={handleChange} />
						<br />
						<Button>Add</Button>
					</form>
				</CardBody>
			</Card>
		</section>
	);
}

export default ConsumableForm;
/* "name": "Diet Coke",
      "description": "Crisp!",
      "recipe": "Open can.",
      "serve": "Immediately." */
