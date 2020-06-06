/*
*
*   Article Preview - Article preview to appear in feeds
*
*/

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import UI from '../UI';

const StyledHeaderBlock = styled(UI.Flex)`
	background-image: url('${props => props.bgImg}')};
	background-size: cover;
	background-position: center;
	align-items: flex-start;
	min-height: 350px
`;

const ArticlePreview = ({article, showCategories}) => (
	<UI.Box 
		mb={8} 
		width={[1, 1/2, 1/3]} 
	>
		<UI.Box 
			width={[1, 11/12]} 
			bg='grayscale.8' 
			boxShadow='dark'
			pb={2}
		>
			<StyledHeaderBlock bgImg={article.headerimageurl}>
				{showCategories && (
					<UI.Span bg='primary.7' color='primary.1' p={2} display='inline'>
						<Link to={`/${article.category.slug}`}>
							{article.category.name}
						</Link>
					</UI.Span>
				)}
			</StyledHeaderBlock>
		    
		    <UI.Box px={3}>
				<UI.Text color='grayscale.4' mb={6} fontSize={1}>
					Published {article.publisheddate} by <UI.TextLink to={`/author/${article.author.id}`}>{article.author.username}</UI.TextLink>
				</UI.Text>
		        <UI.H3 my={2}>
			        <Link to={`/article/${article.id}`}>{article.title}</Link>
		        </UI.H3>
		        <UI.Text my={4} color='grayscale.4'>{article.subtitle}</UI.Text>
	       </UI.Box>
       </UI.Box>
	</UI.Box>
);

export default ArticlePreview;
