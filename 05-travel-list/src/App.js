import React, { Fragment, useState } from 'react';
const initialItems = [
	{ id: 1, description: 'Passports', quantity: 2, packed: false },
	{ id: 2, description: 'Socks', quantity: 12, packed: true },
	{ id: 3, description: 'Charger', quantity: 1, packed: false },
];

function App() {
	return (
		<div className='app'>
			<Logo />
			<Form />
			<PackingList />
			<Stats />
		</div>
	);
}

function Logo() {
	return (
		<Fragment>
			<h1>🌴 Far Away 💼</h1>
		</Fragment>
	);
}

function Form() {
	const [description, setDescription] = useState('');
	const [quantity, setQuantity] = useState(1);

	function handleSubmit(e) {
		e.preventDefault();

		if (!description) return;

		const newItem = {
			description,
			quantity,
			packed: false,
			id: Date.now(),
		};
		console.log(newItem);

		setDescription((prev) => '');
		setQuantity((prev) => 1);
	}

	return (
		<form className='add-form' onSubmit={handleSubmit}>
			<h3>What do you need for your 😎 trip?</h3>
			<select
				value={quantity}
				onChange={(e) => setQuantity((prev) => Number(e.target.value))}
			>
				<option value={1}>one</option>
				<option value={2}>two</option>
				<option value={3}>three</option>
			</select>
			<input
				type='text'
				placeholder='Item...'
				value={description}
				onChange={(e) => setDescription((prev) => e.target.value)}
			/>
			<button type='submit'>Add</button>
		</form>
	);
}

function PackingList() {
	return (
		<div className='list'>
			<ul>
				{initialItems.map((item, idx) => (
					<Item key={idx} {...item} />
				))}
			</ul>
		</div>
	);
}

function Item({ description, quantity, packed }) {
	return (
		<li>
			<span style={packed ? { textDecoration: 'line-through' } : {}}>
				{description} {quantity}
			</span>
			<button>❌</button>
		</li>
	);
}

function Stats() {
	return (
		<footer className='stats'>
			<em>💼 You have X on your list, and you already packed X (X%)</em>
		</footer>
	);
}

export default App;
