/*
 * 
 * Button components 
 * 
 */

import styled from 'styled-components';
import { space, flexbox, shadow, layout, typography, color  } from 'styled-system';


const BaseButtonInput = styled.input.attrs(props => ({
	type: props.submit ? 'submit' : 'button',
}))`
	color: inherit;
	background-color: inherit;
	border-radius: ${props => props.theme.space[1]};
	padding: ${props => props.theme.space[3]};
	cursor: pointer;
	border: 0;
	margin: 0 ${props => props.theme.space[1]};
	${space}
	${layout}
	${flexbox}
	${color}
`;


const BaseIconButton = styled.button`
	color: inherit;
	background-color: inherit;
	border-radius: ${props => props.theme.space[1]};
	padding: ${props => props.theme.space[3]};
	cursor: pointer;
	border: 0;
	margin: 0 ${props => props.theme.space[1]};
	${space}
	${layout}
	${flexbox}
	${color}
`;

const PrimaryIconButton = styled(BaseIconButton)`
	background-color: ${props => props.theme.colors.primary[7]};
	color: ${props => props.theme.colors.primary[0]};
`;

const PrimaryButton = styled(BaseButtonInput)`
	background-color: ${props => props.theme.colors.primary[7]};
	color: ${props => props.theme.colors.primary[0]};
`;

const CancelButton = styled(BaseButtonInput)`
	background-color: ${props => props.theme.colors.cancel};
	color: ${props => props.theme.colors.primary[0]};
`;

export default {
	PrimaryButton,
	CancelButton,
	PrimaryIconButton,
}