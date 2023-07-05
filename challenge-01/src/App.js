import React, { useState } from 'react';

function App() {
	const [step, setStep] = useState(0);
	const [count, setCount] = useState(1);

	const date = new Date();
	date.setDate(date.getDate() + count);

	return (
		<React.Fragment>
			<div>
				<button onClick={() => setStep((prev) => prev - 1)}>-</button>
				Step {step}
				<button onClick={() => setStep((prev) => prev + 1)}>+</button>
			</div>

			<div>
				<button onClick={() => setCount((prev) => prev - step)}>
					-
				</button>
				Count {count}
				<button onClick={() => setCount((prev) => prev + step)}>
					+
				</button>
			</div>

			<p>
				{count === 0 ? (
					<span>today is {date.toLocaleDateString()}</span>
				) : count > 0 ? (
					<span>
						{count} {count === 1 ? 'day' : 'days'} from today is
						{date.toLocaleDateString()}
					</span>
				) : (
					<span>
						{Math.abs(count)}{' '}
						{Math.abs(count) === 1 ? 'day' : 'days'} from today was
						{date.toLocaleDateString()}
					</span>
				)}
			</p>
		</React.Fragment>
	);
}

export default App;
