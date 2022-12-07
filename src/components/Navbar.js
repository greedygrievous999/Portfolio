import { Search, ShoppingCart } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {BrowserRouter, Route, Link } from 'react-router-dom'

const Container = styled.div`
  height: 100px;
  height: 60px;
  background-color: white;
`
const Wrapper =  styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const Logo = styled.h1`
  font-weight: bold;
`
const MenuItem = styled.li`
  font-size: 14px;
  cursor: pointer;
  margin-left: 15px;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit'}}>
              <Logo>GREEDYGRIEVOUS999</Logo>
            </Link>
        </Left>
        <Right>
          <Link to="/personas" style={{ textDecoration: 'none', color: 'inherit'}}>
            <MenuItem>Personas</MenuItem>
          </Link>
          <Link to="/responsive" style={{ textDecoration: 'none', color: 'inherit'}}>
              <MenuItem>Responsive Redesign</MenuItem>
          </Link>
          <Link to="/iterative" style={{ textDecoration: 'none', color: 'inherit'}}>
              <MenuItem>Iterative Design</MenuItem>
          </Link>
          <Link to="/development" style={{ textDecoration: 'none', color: 'inherit'}}>
              <MenuItem>Development</MenuItem>
          </Link>
          <Link to="/about" style={{ textDecoration: 'none', color: 'inherit'}}>
              <MenuItem>About</MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar