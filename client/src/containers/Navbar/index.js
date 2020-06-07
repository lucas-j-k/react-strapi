import React, { useState, useEffect } from 'react';
import styled, { withTheme } from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';

import UI from '../../components/UI';

const StyledNav = styled.nav`
  display: ${props => props.visible ? 'block' : 'none'};
`;

const NavLink = ({path, label}) => (
  <UI.NavListItem mr={2} key={path} width={[1, 'auto']}>
  	<UI.NavLink to={path}>{label}</UI.NavLink>
  </UI.NavListItem>
);


const renderCategoryNav = categories => {
  return categories.map(category => {
    return <NavLink path={category.slug} label={category.name} key={category.id} />
  })
}


const Navbar = ({categories}) => {

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
              <NavLink path='/' label='Home' />
               {categories && renderCategoryNav(categories)}
              <NavLink path='/about' label='About' />
              <NavLink path='/contact' label='Contact' />
            </UI.List>
          </StyledNav>
    </UI.Box>
  );
};

export default withTheme(Navbar);
