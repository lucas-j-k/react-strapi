/*
*
*	Sidebars
*	Define and export the different available sidebars
*
*/

import React from 'react';

import ArticleListSidebar from './templates/ArticleListSidebar';
import LoadingPanel from '../LoadingPanel';
import UI from '../UI';


/*
* Latest Articles
*/
export const Latest = () => (
	<ArticleListSidebar 
		title='Latest Articles from across the site' 
		path='articles?_sort=created_at:DESC&_limit=5'
	/>
);


/*
* More articles from this category (based on category ID returned from article API call)
*/
export const Category = ({categoryId}) => (
	<ArticleListSidebar 
		title='More from this category' 
		path={`articles?category=${categoryId}`} 
	/>
);


/*
* Placeholder if we can't initialise sidebar until other values are fetched from API (e.g Category ID)
*/
export const Placeholder = () => (
	<UI.Box minHeight='300px'>
		<LoadingPanel />
	</UI.Box>
);



export default {
	Latest,
	Category,
	Placeholder
}