/*
 * 
 * MarkdownRender - render markdown content with custom styles
 * 
 */

import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import UI from '../UI';

// Define styled for the compiled markdown content
const StyledMarkdown = styled.div`

	a {
		text-decoration: underline;
		color: ${props => props.theme.colors.primary[2]};
	}
	
	img {
		max-width: 100%;
		margin: ${props => props.theme.space[4]} 0;
		display: block;
	}

	p {
		line-height: 1.5;
	}
`;

const MarkdownRender = ({content}) => (
	<UI.Box mb={8}>
		<StyledMarkdown>
			<ReactMarkdown 
				source={content}
				transformImageUri={uri => {
					console.log('URI -- ', uri);
					return uri.startsWith('http') ? uri : `${process.env.REACT_APP_API_ROOT}${uri}`}
				}
			/>
		</StyledMarkdown>
	</UI.Box>
);

export default MarkdownRender;
