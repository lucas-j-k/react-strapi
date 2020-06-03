import React, { useState, useEffect } from 'react';
import styled, { withTheme } from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';

import UI from '../../components/UI';

import navItems from './navItems';

const StyledNav = styled.nav`
  display: ${props => props.visible ? 'block' : 'none'};
`;

const NavLink = navItem => (
  <UI.NavListItem mr={2} key={navItem.path} width={[1, 'auto']}>
  	<UI.NavLink to={navItem.path}>{navItem.label}</UI.NavLink>
  </UI.NavListItem>
);



const Navbar = (props) => {

  const [ navVisible, setNavVisible ] = useState(false);

  const measureScreen = () => {

    if(window.top.innerWidth > 768) {
      setNavVisible(true);
    } else {
      setNavVisible(false);
    }
  };

  useEffect(() => {
    window.top.addEventListener('resize', measureScreen);
    measureScreen();
  }, []);


  return (
    <UI.Box bg='grayscale.8' color='grayscale.4'>
      <UI.Box display={['block', 'none']} p={2}>
        <UI.PrimaryIconButton 
          onClick={() => {setNavVisible(!navVisible)}} 
        > 
          <AiOutlineMenu />
        </UI.PrimaryIconButton>
      </UI.Box>
        <StyledNav visible={navVisible}>
            <UI.List display='flex' my={0} flexWrap='wrap' alignItems='center'>
             {
               navItems.map(item => NavLink(item))
             }
            </UI.List>
          </StyledNav>
    </UI.Box>
  );
};

export default withTheme(Navbar);
