import { useEffect, useState } from 'react'
import './App.scss'
import InputRange from './components/InputRange/InputRange'
import useTotalPrice from './hooks/useTotalPrice'

function App() {
	const [price, setPrice] = useState(0)
	const [months, setMonths] = useState(0)
	const [discount, setDiscount] = useState(0)
	const [isInstallment, setIsInstallment] = useState(false)

	useEffect(() => {
		setIsInstallment(!!months)
	}, [months])

	return (
		<div className="wrapper">
			<main className="page">
				<div className="calc">
					<h1 className="calc__title">Credit calculator</h1>
					<div className="calc__value">
						<span>&#8381; {price * 1000}</span>
					</div>
					<div className="calc__range">
						<InputRange min="0" max="100" value={price} onChange={e => setPrice(+e.target.value)} />
						<div className="calc__range-min">0 &#8381;</div>
						<div className="calc__range-max">Max 100.000 &#8381;</div>
					</div>
					<div className="calc__value">
						<span>{months} Months</span>
					</div>
					<div className="calc__range">
						<InputRange min="0" max="100" value={months} onChange={e => setMonths(+e.target.value)} />
						<div className="calc__range-min">0 months</div>
						<div className="calc__range-max">Max 100 months</div>
					</div>
					<div className="calc__value">
						<span>{discount / 4}% Discount</span>
					</div>
					<div className="calc__range">
						<InputRange min="0" max="100" value={discount} onChange={e => setDiscount(+e.target.value)} />
						<div className="calc__range-min">0%</div>
						<div className="calc__range-max">Max 25%</div>
					</div>
					<div className="calc__result result">
						<div className="result__body">
							<div className="result__months">Monthly cost for {months} month</div>
							<div className="result__value">
								{useTotalPrice({ price: price * 1000, discount: discount / 4, isInstallment: isInstallment, months: months })} &#8381;
							</div>
							<div className="result__discount">Discount - {discount / 4}%;</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

export default App
