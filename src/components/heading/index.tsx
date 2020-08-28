import './heading.scss';
import * as React from 'react';


const Heading = (props) => {

	return (
		<div dangerouslySetInnerHTML={{ __html: props.title }} className={`heading ${props.modifiers}`} />
	)
}

export default Heading;