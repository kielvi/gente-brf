import React, { ButtonHTMLAttributes } from "react";
import './button.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	appearance?: string;
	container?: string;
	label?: string;
	isDirty?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ appearance, label, container, isDirty, onClick, ...rest }) => {

	return (
		<div className={container}>
			<button
				{...rest}
				className={appearance}
				onClick={onClick}
			/* disabled={!isDirty} */
			>
				{label}
			</button>
		</div>
	)
})

export default Button;