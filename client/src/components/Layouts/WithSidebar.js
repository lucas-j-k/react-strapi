/*
*
*	Layout with a main column and sidebar column
*
*/


import React from 'react';

import UI from '../UI';


const WithSidebar = ({main, sidebar}) => (
	<UI.Flex justifyContent='space-around' mt={6} width={11/12}>

		{/* Main Content Area */}
        <UI.Box width={[11/12, 8/12]}>
        	{main}
        </UI.Box>


        {/* Sidebar Content Area */}
        <UI.Box width={[11/12, 3/12]}>
			{sidebar}
        </UI.Box>

    </UI.Flex>
);

export default WithSidebar;
