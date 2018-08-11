import React from 'react';
import FontAwesome from 'react-fontawesome';
import NavItem from './NavItem';

export const Search = props => (
  <NavItem
    label="Search"
    icon={
      <FontAwesome
        name='search'
        size='2x'
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
    }
    {...props}
  />
)

export const Home = props => (
  <NavItem
    label="Home"
    icon={
      <FontAwesome
        name='home'
        size='2x'
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
    }
    {...props}
  />
)

export const Library = props => (
  <NavItem
    label="Your library"
    icon={
      <FontAwesome
        name='list'
        size='2x'
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
    }
    {...props}
  />
)