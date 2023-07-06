import { Fragment, useState } from 'react';

import './App.css';

function App() {
	return (
		<div className='App'>
			<Counter />
		</div>
	);
}

function Counter() {
	const [step, setStep] = useState(1);
	const [count, setCount] = useState(0);

	const date = new Date();
	date.setDate(date.getDate() + count);

	function handleStepChange(e) {
		setStep((prev) => Number(e.target.value));
	}

	function handleReset() {
		setCount(0);
		setStep(1);
	}
	return (
		<Fragment>
			<div>
				<input
					type='range'
					name='range'
					value={step}
					onChange={handleStepChange}
					min={0}
					max={10}
				/>
				<span>Step: {step}</span>
			</div>

			<div>
				<button onClick={() => setCount((prev) => prev - step)}>
					-
				</button>
				<input
					type='text'
					value={count}
					onChange={(e) => setCount((prev) => Number(e.target.value))}
				/>
				<button onClick={() => setCount((prev) => prev + step)}>
					+
				</button>
			</div>

			<p>
				<span>
					{count === 0
						? 'Today is '
						: count < 0
						? `${Math.abs(count)}  days ago was `
						: `${count} days from today is `}
				</span>
				<span>{date.toLocaleDateString()}</span>
			</p>

			{count !== 0 || step !== 1 ? (
				<button onClick={handleReset}>Reset</button>
			) : null}
		</Fragment>
	);
}

export default App;
