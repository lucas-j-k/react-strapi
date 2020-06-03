import React from 'react';
import { Link } from "react-router-dom";

import useFetchSingle from '../../../utilities/customHooks/useFetchSingle';
import LoadingPanel from '../../LoadingPanel';
import ErrorPanel from '../../ErrorPanel';
import UI from '../../UI';


// Render a list of articles
const renderArticles = articles => articles.map(a => (
	<UI.Box mb={6}>
		<UI.Box pt={1}>
			<UI.Span bg='primary.7' color='primary.1' p={1} fontSize={0}>
				{a.category.name}
			</UI.Span>
		</UI.Box>
		<UI.Text fontSize={2} color='grayscale.2' mt={2}>
			<Link to={`/article/${a.id}`}>
				{a.title}
			</Link>
		</UI.Text>
		<UI.Text color='grayscale.4' mt={1}>{a.subtitle}</UI.Text>
	</UI.Box>
));


const ArticleListSidebar = ({title, path}) => {

	const [
        content,
        contentLoaded,
        notFound,
        errorOccurred,
        errorMessage,
        loading,
    ] = useFetchSingle(path);

	return (
		<UI.Box minHeight='250px' mb={8} pb={4}>
			{contentLoaded && content && (
				<React.Fragment>
					<UI.H3 color='primary.4'>{title}</UI.H3>
					<UI.Divider />
					<UI.Box>
						{renderArticles(content)}
					</UI.Box>
				</React.Fragment>
			)}
			{loading && <LoadingPanel verticalCenter />}
			{errorOccurred && <ErrorPanel />}
		</UI.Box>
	);
}

export default ArticleListSidebar;
