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
  justify-content: space-around;
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
  
  &:hover{
    color: coral;
    transform: scale(1.1);
  }
`
const MenuItem = styled.li`
  font-size: 12px;
  margin-right: 10px;
  cursor: pointer;

  &:hover{
    color: coral;
  }
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit'}}>
              <Logo>GREEDY GRIEVOUS</Logo>
            </Link>
        </Left>
        <Right>
            <MenuItem><Link to="/personas" style={{ textDecoration: 'none', color: 'inherit'}}>Personas</Link></MenuItem>
            <MenuItem><Link to="/responsive" style={{ textDecoration: 'none', color: 'inherit'}}>Record Shop Redesign</Link></MenuItem>
            <MenuItem><Link to="/iterative" style={{ textDecoration: 'none', color: 'inherit'}}>Mobile Search Design</Link></MenuItem>
            <MenuItem><Link to="/development" style={{ textDecoration: 'none', color: 'inherit'}}>E-Commerce Development</Link></MenuItem>
            <MenuItem><Link to="/about" style={{ textDecoration: 'none', color: 'inherit'}}>About</Link></MenuItem>     
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar