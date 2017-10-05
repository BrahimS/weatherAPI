
import React from 'react';
import PropTypes from 'prop-types';
export const GetTime = (props) => {
	return (
		<div>{ props.time }</div>
	);
}

GetTime.propTypes = {
		time: PropTypes.string
};
