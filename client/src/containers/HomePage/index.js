import React from "react";

import Layouts from '../../components/Layouts';
import HomepageRow from '../../components/HomepageRow';

const Homepage = () => {
 	
	const generateBody = () => (
		<React.Fragment>
			<HomepageRow categoryTitle='Sport' resourcePath='articles?category=1&_limit=3' />
			<HomepageRow categoryTitle='Arts & Entertainment' resourcePath='articles?category=2&_limit=3' />
			<HomepageRow categoryTitle='Technology' resourcePath='articles?category=3&_limit=3' />
		</React.Fragment>
	);

 	return (
 		<Layouts.SingleColumn 
 			main={generateBody()} 
 		/>
 	);
};

export default Homepage;

