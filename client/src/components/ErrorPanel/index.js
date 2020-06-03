/*
*
*   Info Panel - container for error / loading messages
*
*/

import React from 'react';

import { ErrorIcon } from '../Icons';
import UI from '../UI';

const ErrorPanel = ({message}) => {
		
	return (
		<UI.Flex 
			textAlign='center'
			justifyContent='center'
			flexDirection='column'
			minHeight='250px'
		>
			<UI.Box width='100%' color='grayscale.1'>
				<ErrorIcon />
			</UI.Box>
			<UI.Box>
				<UI.Text fontSize={3} color='grayscale.0'>An Error Has Occurred</UI.Text>
				<UI.Text color='grayscale.3'>{message || 'Please refresh to try again'}</UI.Text>
			</UI.Box>
		</UI.Flex>
	);
};

export default ErrorPanel;
