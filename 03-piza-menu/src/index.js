import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
	{
		name: 'Focaccia',
		ingredients: 'Bread with italian olive oil and rosemary',
		price: 6,
		photoName: 'pizzas/focaccia.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Margherita',
		ingredients: 'Tomato and mozarella',
		price: 10,
		photoName: 'pizzas/margherita.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Spinaci',
		ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
		price: 12,
		photoName: 'pizzas/spinaci.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Funghi',
		ingredients: 'Tomato, mozarella, mushrooms, and onion',
		price: 12,
		photoName: 'pizzas/funghi.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Salamino',
		ingredients: 'Tomato, mozarella, and pepperoni',
		price: 15,
		photoName: 'pizzas/salamino.jpg',
		soldOut: true,
	},
	{
		name: 'Pizza Prosciutto',
		ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
		price: 18,
		photoName: 'pizzas/prosciutto.jpg',
		soldOut: false,
	},
];

function App() {
	return (
		<div className='container'>
			<Header />
			<Menu />
			<Footer />
		</div>
	);
}

function Header() {
	return (
		<header className='header'>
			<h1>Fast React Pizza Co.</h1>
		</header>
	);
}

function Menu() {
	const pizzas = pizzaData;
	const pizzasLength = pizzas.length;
	return (
		<main className='menu'>
			<h2>Our Menu</h2>
			{pizzasLength > 0 ? (
				<React.Fragment>
					<p>
						Authentic Italian cuisine. 6 creative dishes to choose
						from. All from our stone oven, all organic, all
						delicious.
					</p>
					<ul className='pizzas'>
						{pizzas.map((p, idx) => (
							<Pizza key={idx} {...p} />
						))}
					</ul>
				</React.Fragment>
			) : (
				<p>
					We're still working on our menu. Please come back later :)
				</p>
			)}
		</main>
	);
}

function Footer() {
	const [time, setTime] = useState(new Date().toLocaleTimeString());
	const hour = new Date().getHours();
	const openHour = 8;
	const closeHour = 18;
	const isOpen = hour < openHour || hour >= closeHour ? false : true;

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime(new Date().toLocaleTimeString());
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<footer className='footer'>
			<div className='order'>
				<p>
					{time}. We are currently {isOpen ? 'open' : 'close'}!!
				</p>

				<button className='btn'>Order</button>
			</div>
		</footer>
	);
	// return React.createElement('footer', null, 'We are currently open!');
}

function Pizza({ name, ingredients, price, photoName, soldOut }) {
	return (
		<li className={`pizza ${soldOut ? 'sold-out' : ''}`}>
			<img src={photoName} alt='spinachi' />
			<div>
				<h3>{name}</h3>
				<p>{ingredients}</p>
				<span>{price}</span>
			</div>
		</li>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
