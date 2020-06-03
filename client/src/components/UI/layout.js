/*
 * 
 * Layout components 
 * 
 */

import styled from 'styled-components';
import { color, space, flexbox, shadow, layout, typography  } from 'styled-system';
import { Link } from "react-router-dom";

const Box = styled.div`
	${color}
	${space}
	${typography}
	${layout}
	${shadow}
`;


const Flex = styled.div`
	${flexbox}
	${layout}
	${color}
	${typography}
	${space}
	display: flex;
	flex-wrap: wrap;
`;

const List = styled.ul`
	list-style: none;
	padding-left: 0;
	${flexbox}
	${space}
	${layout}
`;

const ListItem = styled.li`
	${space}
	${layout}
	${color}
	${typography}
`;


const Span = styled.span`
	${layout}
	${space}
	${color}
	${typography}
`;

const NavListItem = styled(ListItem)`
	&:hover {
		background-color: ${props => props.theme.colors.primary[8]};
		color: ${props => props.theme.colors.primary[0]};
	}
`;

const NavLink = styled(Link)`
  padding: ${props => props.theme.space[4]};
  display: block;
`;

const Divider = styled.div`
	border-bottom: 1px solid ${props => props.theme.colors.grayscale[4]};
	margin: ${props => props.theme.space[2]} 0;
	${space}
`;


export default {
	Flex,
	Box,
	Span,
	List,
	ListItem,
	NavListItem,
	NavLink,
	Divider,
}


