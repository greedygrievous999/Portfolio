import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    text-align: center;

    padding: 30px;
`
const Column = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 10px;

`
const Logo = styled.h1``

const Desc = styled.p`
    margin: 20px 0px;
`
const Link = styled.p`
    margin: 5px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`
const Center = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 10px;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 10px;
`

const Footer = () => {
  return (
    <Container> 
        Built on React
    </Container>
  )
}

export default Footer