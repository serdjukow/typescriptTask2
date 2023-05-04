import styled from 'styled-components'
import { RangeInputProps } from '../../models'



const InputRange = styled.input.attrs<RangeInputProps>({ type: 'range' })`
	width: 100%;
	-webkit-appearance: none;
	-moz-appearance: none;
	outline: 0;
	height: 6px;
	border-radius: 40px;
	background: ${props => `linear-gradient(to right, #59c2a4 0%, #59c2a4 ${props.value}%, #fff ${props.value}%, #fff 100%);`};
	box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);

	::-webkit-slider-thumb {
		-webkit-appearance: none;
		width: 24px;
		height: 24px;
		background-image: radial-gradient(circle, #f7f7fc 25%, #59c2a4 30%);
		border-radius: 50%;
		box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.5);
		cursor: pointer;
	}

	::-moz-range-thumb {
		width: 24px;
		height: 24px;
		-moz-appearance: none;
		background-image: radial-gradient(circle, #f7f7fc 40%, #59c2a4 45%);
		border-radius: 50%;
		box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
	}
`
export default InputRange
