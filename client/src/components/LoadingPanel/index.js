/*
*
*	Full Size Loading Panel
*
*/


import React from 'react';

import { LoadingIcon } from '../Icons';
import UI from '../UI';

const LoadingPanel = ({verticalCenter, showText}) => (
	<UI.Flex 
		minHeight='250px'
		flexDirection='column' 
		justifyContent='center'
	>
		<UI.Box 
			textAlign="center"
		>
			<LoadingIcon />
		</UI.Box>
		{showText && (
			<UI.Box width="100%" textAlign="center">
				<UI.Text fontSize={2}>Loading</UI.Text>
			</UI.Box>
		)}
	</UI.Flex>
);

export default LoadingPanel;
