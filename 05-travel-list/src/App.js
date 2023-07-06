import React, { Fragment } from 'react';

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
	return (
		<div className='add-form'>
			<h3>What do you need for your 😎 trip?</h3>
		</div>
	);
}

function PackingList() {
	return <div className='list'>LIST</div>;
}

function Stats() {
	return (
		<footer className='stats'>
			<em>💼 You have X on your list, and you already packed X (X%)</em>
		</footer>
	);
}

export default App;
