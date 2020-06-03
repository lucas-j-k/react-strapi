/*
 * 
 * List and Navigation List components 
 * 
 */

import styled from 'styled-components';
import { color, space, flexbox, layout, typography  } from 'styled-system';
import { Link } from "react-router-dom";

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


export default {
	List,
	ListItem,
	NavListItem,
	NavLink,
}