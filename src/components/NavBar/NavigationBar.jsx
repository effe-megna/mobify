import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Search, Home, Library } from "../NavItem"

const NavigationBar = ({

}) => {
  const Container = styled.nav`
    width: 220px;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 100;
    overflow: auto;
    min-height: 0!important;
    will-change: transform;
    
    background: ${props => props.theme.primary};
    padding: 20px;
  `;

  return (
    <Container>
      <Search />
      <Home />
      <Library />
    </Container>
  );
}

export default NavigationBar;