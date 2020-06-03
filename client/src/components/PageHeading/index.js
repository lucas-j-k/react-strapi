/*
*
*   Page Heading - generic heading for main page titles
*
*/

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import UI from '../UI';

const PageHeading = ({text}) => (
	<UI.Box my={6}>
		<UI.H1 my={1} color='primary.4'>{text}</UI.H1>
	</UI.Box>
);

export default PageHeading;
