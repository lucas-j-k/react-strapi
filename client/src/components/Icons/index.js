/*
*
*	Icons
*
*/

import React from 'react';
import { AiOutlineLoading3Quarters, AiOutlineExclamationCircle } from 'react-icons/ai';
import styled, { keyframes } from 'styled-components';

const RotateAnimation = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(359deg);
	}
`;

const RotatingIcon = styled(AiOutlineLoading3Quarters)`
	animation: ${RotateAnimation} 0.8s linear infinite;
	width: 40px;
	height: 40px
`;

const StyledErrorIcon = styled(AiOutlineExclamationCircle)`
	width: 40px;
	height: 40px
`;


/*
*
*	Icon Exports
*
*/

export const LoadingIcon = () => <RotatingIcon />

export const ErrorIcon = () => <StyledErrorIcon />

