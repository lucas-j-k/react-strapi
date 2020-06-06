/*
 * 
 * Form components 
 * 
 */

import styled from 'styled-components';
import { space, layout } from 'styled-system';


const baseTextInput = styled.input`
	background-color: ${props => props.theme.colors.grayscale[8]};
	color: ${props => props.theme.colors.grayscale[1]};
	display: block;
	width: 100%;
	line-height: 1.5;
	border: none;
	padding: ${props => props.theme.space[3]}};
	
	&::placeholder {
		color: ${props => props.theme.colors.grayscale[4]};
	}
`;

const TextInput = styled(baseTextInput).attrs({
	type: 'text',
})`
	${space}
	${layout}
`;

const EmailInput = styled(baseTextInput).attrs({
	type: 'email',
})`
	${space}
	${layout}
`;

const Label = styled.label`
	color: ${props => props.theme.colors.grayscale[4]};
	display: block;
	width: 100%;
	${space}
	${layout}
`;

const TextArea = styled.textarea`
	width: 100%;
	max-width: 100%;
	min-height: 150px;
	border: 0;
	line-height: 1.5;
	padding: ${props => props.theme.space[3]};
	background-color: ${props => props.theme.colors.grayscale[8]};
	color: ${props => props.theme.colors.grayscale[2]};
	display: block;
	${space}
	${layout}
`;


export default {
	TextInput,
	EmailInput,
	TextArea,
	Label,
}


