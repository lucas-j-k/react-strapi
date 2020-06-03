/*
*
*	Layout with a single column (no sidebar)
*
*/


import React from 'react';

import UI from '../UI';


const SingleColumn = ({main}) => (
	<UI.Box width={11/12} mx='auto' mt={6}>
		{main}
	</UI.Box>
);

export default SingleColumn;
