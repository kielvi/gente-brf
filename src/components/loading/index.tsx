import React from "react";
import "./loading.scss";

const Loading = ({ text, modifiers }) => {
	return (
		<div className={`loading ${modifiers}`}>
			<div className="loading_image">
				<svg viewBox="25 25 50 50" >
					<circle className="loading_image-path" cx="50" cy="50" r="20" fill="none" stroke="#F58220" stroke-width="2" />
				</svg>
			</div>
			<div className="loading_text">{text}</div>
		</div>
	)
};

export default Loading;