import React from 'react'
import styled from 'styled-components';
import Footer from '../components/Footer';
import {Routes, Route, useNavigate, Link} from 'react-router-dom'
import Personas from './Personas'

const ProjectsContainer = styled.div`
    z-index: 2;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`
const HoverAction = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.8);
    z-index: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 1s ease;
    cursor: pointer;
`
const ImageContainer = styled.div`
    flex: 1;
    margin: 25px;
    min-width: 65vh;
    height: 65vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: whitesmoke;
    border: 1px;
    border-color: black;
    position: relative;

    &:hover ${HoverAction}{
        opacity: 1;
    }
`
const Image = styled.img`
    max-height: 80%;
    min-width: 80%;
    max-width: 90%;
    z-index: 2;
`
const ReadMoreButton = styled.button`
    width: 30%;
    padding: 5px;
    background-color: white;
    color: black;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    border: 3px;
    border-color: coral;
    transition: all 0.5s ease;

    &:hover{
        background-color: lightcoral;
        color: white;
        transform: scale(1.3);

    }
    &:checked{
        background-color: white;
        transform: scale(0.9);  
    }
`
const TextInfo = styled.div`
    display: flex;
    flex: wrap;
    margin: 5px;
    color: white;
`
const Title = styled.span`
    font-weight: 400;
    font-size: 24px;
`
const Description = styled.span`
    font-weight: 400;
    font-size: 16px;
    text-align: center;
`


const Header = styled.h1`
    font-weight: 200;
`
const Introduction = styled.div`
    flex: 1;
    padding-left: 30px;
    padding-top: 30px;
`

const Homepage = () => {
    return (
        <div>
        <Introduction>
            <Description>is a web designer based in Providence, Rhode Island. His work engages with this, and that, and this that so that he can do this that. Take a look at some of his projects below:</Description>
        </Introduction>
        <ProjectsContainer>

            <ImageContainer>
                <Image src="https://storage.googleapis.com/uxfolio/633b6ad21d43db0003adbb62/633b7d0c1d43db0003adbb99/xiQdq2LYhjN3Ovbu.png"/>
                <HoverAction>     
                    <TextInfo>
                        <Title>Personas</Title>
                    </TextInfo>
                    <TextInfo>
                        <Description>User research project identifying different personas interacting with a vending machine interface</Description>
                    </TextInfo>
                    <ReadMoreButton>
                    <Link to ="/personas" style={{ textDecoration: 'none', color: 'inherit'}}> 
                        READ MORE
                    </Link>
                    </ReadMoreButton>
                </HoverAction>
            </ImageContainer>

            <ImageContainer>
                <Image src="https://i.imgur.com/42c5wMz.png"/>
                <HoverAction>     
                    <TextInfo>
                        <Title>Responsive Redesign</Title>
                    </TextInfo>
                    <TextInfo>
                        <Description>Responsive, modernized front-end redesign for record shopping e-commerce page</Description>
                    </TextInfo>
                    <ReadMoreButton>
                    <Link to ="/responsive" style={{ textDecoration: 'none', color: 'inherit'}}>
                        READ MORE
                    </Link>
                    </ReadMoreButton>
                </HoverAction>
            </ImageContainer>

            <ImageContainer>
                <Image src="https://i.imgur.com/FjZxLlw.png"/>
                <HoverAction>     
                    <TextInfo>
                        <Title>Iterative Design</Title>
                    </TextInfo>
                    <TextInfo>
                        <Description>Sequential interface design for AI-assisted search engine</Description>
                    </TextInfo>
                    <ReadMoreButton>
                        <Link to ="/iterative" style={{ textDecoration: 'none', color: 'inherit'}}>
                        READ MORE
                        </Link>
                    </ReadMoreButton>
                </HoverAction>
            </ImageContainer>

            <ImageContainer>
                <Image src="https://i.imgur.com/HfLW1u1.png"/>
                <HoverAction>     
                    <TextInfo>
                        <Title>Development</Title>
                    </TextInfo>
                    <TextInfo>
                        <Description>Front-end design for record shopping interface with sorting, filtering and cart functionality</Description>
                    </TextInfo>
                    <ReadMoreButton>
                        <Link to ="/development" style={{ textDecoration: 'none', color: 'inherit'}}>
                        READ MORE
                        </Link>
                    </ReadMoreButton>
                </HoverAction>
            </ImageContainer>

        </ProjectsContainer>
        <Footer/>
        </div>
    )
}

export default Homepage;