import { Search, ShoppingCart } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

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

const Language = styled.span`
  font-size: 60;
  cursor: pointer;
`
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
`
const Input = styled.input`
  border: none;
`

const Logo = styled.h1`
  font-weight: bold;
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>JACKSON DELEA</Logo>
        </Left>
        <Right>
          <MenuItem>Contact</MenuItem>
          <MenuItem>About</MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar