/*
*
*   Footer - universal site footer
*
*/

import React from 'react';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import footerNavItems from './footerNavItems';

import UI from '../UI';

const Footer = props => (
        <UI.Box py={6} px={6} bg='grayscale.8' color='grayscale.3'>
            <UI.Box mb={6}>
            	<UI.List display={['block', 'flex']} mb={6} justifyContent='center' color='grayscale.7'>
		            {
		            	footerNavItems.map(item => (
      							<UI.ListItem mr={4} mb={3} textAlign={['center', 'auto']}><UI.TextLink to={item.path}>{item.label}</UI.TextLink></UI.ListItem>
		            	))
		            }
            	</UI.List>
          	</UI.Box>
          	<UI.Flex alignItems='center' justifyContent='center'>
	          	<AiOutlineCopyrightCircle />
          		<UI.Text my={0} ml={1}>Copyright 2020</UI.Text>
          	</UI.Flex>
        </UI.Box>
	);

export default Footer;
