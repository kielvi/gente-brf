import './paragraph.scss';
import * as React from 'react';


const Paragraph = (props) => {

	return (
		<div className="paragraph">
			<div
				dangerouslySetInnerHTML={{ __html: props.text }}
				className={`paragraph_content ${props.modifiers}`}
			/>
		</div>
	)
}

export default Paragraph;