import React from "react";

import Layouts from '../../components/Layouts';
import HomepageRow from '../../components/HomepageRow';

const Homepage = ({categories}) => {
 
	const generateBody = () => {
		return categories.map(category => {
			const path = `articles?category=${category.id}&_limit=3`;
			return (
				<HomepageRow 
					categoryTitle={category.name} 
					resourcePath={path}
					key={category.id}
				/>
			)
		});
	};

 	return (
 		<Layouts.SingleColumn 
 			main={categories && generateBody()} 
 		/>
 	);
};

export default Homepage;

