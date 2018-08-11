import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NavItem = ({
  label,
  icon
}) => {

  const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    
    margin-top: 10px;
    margin-bottom: 10px;
  `;

  const Label = styled.label`
    font-size: 1.2rem;

    margin-left: 15px;
  `

  return (
    <Container>
      {icon}
      <Label>{label}</Label>
    </Container>
  );
}

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired
}

export default NavItem;