'use strict'

import React, { PureComponent } from 'react'
import {createPaginationContainer, graphql} from 'react-relay'
import styled from 'styled-components';

import User from './User'

class Home extends PureComponent {
  render () {
    return (
      <div>
        <Header>
        <h1 style={styles.HeaderTItle} >GITUSER</h1>
        <Search />
        </Header>
        <User />
      </div>
    )
  }
}
const Search = () => (
  <div style={ styles.HeaderSearch }>
    <input style={styles.SearchInput} type="text" />
    <SearchButton>Buscar</SearchButton>
  </div>
);

const Header = styled.div`
  display: flex;
  background-color: #000;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const SearchButton = styled.button`
  background-color: #d50000;
  border: 0;
  border-radius: 5px;
  margin: 10px;
  padding: 18px;
`
const styles = {
  HeaderTItle:{
    color: '#fff',
    padding: 20
  },
  HeaderSearch:{
    display: 'flex',
    paddingBottom: 10,
    alignItems: 'center'
  },
  SearchInput:{
    borderRadius: 5,
    height: 45

  }
}

export default Home
