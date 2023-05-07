import { PriceInterface } from './../models'

const useTotalPrice = ({ price, isInstallment, discount, months }: PriceInterface): number => {
	let result = isInstallment ? (price - (price / 100) * discount) / months : price - (price / 100) * discount
	return Math.floor(result * 100) / 100
}

export default useTotalPrice