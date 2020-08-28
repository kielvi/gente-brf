import React, { InputHTMLAttributes, useState, useCallback } from "react";
import { FiEye, FiEyeOff } from 'react-icons/fi';
import './input.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	appearance?: string;
	container?: string;
	autoComplete?: string;
	error?: string;
	eye?: boolean;
}

const BaseInput = React.forwardRef<HTMLInputElement, InputProps>(({ appearance, autoComplete, container, error, type, eye, ...rest }, ref) => {
	const [Eye, setEye] = useState(true);
	const changeEye = useCallback(() => {
		setEye(!Eye)
	}, [Eye])

	return (
		<div className={`${container} ${eye && "-input_eye"}`}>
			{error &&
				<div>
					<div className="form_error">{error}</div>
					<div className="form_error-icon"></div>
				</div>
			}
			<input
				{...rest}
				type={eye ? (Eye ? 'password' : 'text') : type}
				ref={ref}
				autoComplete={autoComplete}
				className={`${appearance} ${error && "-error"}`}
			/>
			{eye && <span onClick={changeEye}>{Eye ? <FiEye /> : <FiEyeOff />}</span>}
		</div>
	)
})

export default BaseInput;