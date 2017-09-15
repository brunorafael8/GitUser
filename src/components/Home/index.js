'use strict'

import React, { PureComponent } from 'react'
import styled from 'styled-components';

import {
  QueryRenderer,
  graphql,
} from 'react-relay'
import environment from '../../Environment'

import User from './User'

class Home extends PureComponent {
  state = {
    user: null
  };
  onsearch = (event) => {
    event.preventDefault();
    this.setState({ user: this.loginPesquisado.value })
    console.log(this.state.user);
  }

  render () {
    const query = graphql`
    query HomeQuery ($login: String!) {
      user (login: $login) {
        ... User_user
        }
      }
    `;
    const variables = {
      login: this.state.user
    };
    return (
      <div>
        <Header>
        <h1 style={styles.HeaderTItle} >GITUSER</h1>
        <form onSubmit={this.onsearch} >
          <div style={ styles.HeaderSearch }>
            <input name="search" placeholder="Pesquisa" type="text" ref={input => this.loginPesquisado = input} style={styles.SearchInput} />
            <SearchButton  value="Buscar" >Buscar</SearchButton>
          </div>
        </form>
        </Header>
        { this.state.user &&
        <QueryRenderer
          environment={environment}
          query={query}
          variables={variables}
          render={({error, props}) => {
            if (error) {
              return <div>{error.message}</div>
            } else if (props) {
              return <User user={props.user} />
            }
            return <div>Loading...</div>
          }}
        />}
      </div>
    )
  }
}


const Header = styled.div`
  display: flex;
  background-color: #24292e;
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
