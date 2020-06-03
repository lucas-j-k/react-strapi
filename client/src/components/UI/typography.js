/*
 * 
 * Typography components 
 * 
 */

import styled, { css } from 'styled-components';
import { color, space, layout, typography, system, compose  } from 'styled-system';
import { Link } from 'react-router-dom';

// Create a custom caps prop to allow easy uppercasing
const caps = system({
  prop: 'caps',
  cssProperty: 'textTransform',
})

/*
*  Utilities
*/ 

// Convert a boolean prop for caps to a textTransform value
const evaluateCaps = bool => bool ? 'uppercase' : 'inherit'

const BaseTextStyles = props => `
	color: ${props.theme.colors.grayscale[1]};
`;

const BaseTextOptions = () => compose( typography, color, space, layout ); 

const capStyle = {
	caps: {
		property: 'textTransform',
		transform: evaluateCaps,
	}
};


/*
*  Components
*/ 


const H1 = styled.h1`
	font-size: ${props => props.theme.fontSizes[5]};
	margin-bottom: ${props => props.theme.space[4]};
	font-weight: bold;
	${system(capStyle)}
	${props => BaseTextStyles(props)}
	${BaseTextOptions()};
`;

const H2 = styled.h2`
	font-size: ${props => props.theme.fontSizes[4]};
	margin-bottom: ${props => props.theme.space[4]};
	font-weight: bold;
	${system(capStyle)}
	${props => BaseTextStyles(props)}
	${BaseTextOptions()};
`;

const H3 = styled.h3`
	font-size: ${props => props.theme.fontSizes[3]};
	margin-bottom: ${props => props.theme.space[3]};
	font-weight: bold;
	${system(capStyle)}
	${props => BaseTextStyles(props)}
	${BaseTextOptions()};
`;

const H4 = styled.h4`
	font-size: ${props => props.theme.fontSizes[3]};
	margin-bottom: ${props => props.theme.space[3]};
	font-weight: bold;
	${system(capStyle)}
	${props => BaseTextStyles(props)}
	${BaseTextOptions()};
`;

const H5 = styled.h5`
	font-size: ${props => props.theme.fontSizes[2]};
	margin-bottom: ${props => props.theme.space[2]};
	font-weight: bold;
	${system(capStyle)}
	${props => BaseTextStyles(props)}
	${BaseTextOptions()};
`;

const H6 = styled.h6`
	font-size: ${props => props.theme.fontSizes[2]};
	margin-bottom: ${props => props.theme.space[2]};
	font-weight: bold;
	${system(capStyle)}
	${props => BaseTextStyles(props)}
	${BaseTextOptions()};
`;


const Text = styled.p`
	margin-bottom: ${props => props.theme.space[2]};
	${system(capStyle)}
	${props => BaseTextStyles(props)}
	${BaseTextOptions()};
`;


const TextLink = styled(Link)`
	color: ${props => props.theme.colors.primary[1]}
	${BaseTextOptions()};
`;





export default {
	H1,
	H2,
	H3,
	H4,
	H5,
	H6,
	Text,
	TextLink,
}


