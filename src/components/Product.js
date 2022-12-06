import React from 'react'
import styled from 'styled-components'

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
    transition: all 0.5s ease;
    cursor: pointer;
`
const ImageContainer = styled.div`
    flex: 1;
    margin: 25px;
    min-width: 600px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: darkgrey;
    position: relative;

    &:hover ${HoverAction}{
        opacity: 1;
    }
`
const Image = styled.img`
    height: 80%;
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
    transition: all 0.5s ease;
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

const Product = (props) => {

  const { item, onAdd } = props;

    return (
        <ImageContainer>
            <Image src={item.img}/>
            <HoverAction>     
                <TextInfo>
                    <Title>{item.title.toUpperCase()}</Title>
                </TextInfo>
                <TextInfo>
                    <Description> {item.description} </Description>
                </TextInfo>
                <ReadMoreButton onClick={()=>onAdd(item)}>READ MORE</ReadMoreButton>
            </HoverAction>
        </ImageContainer>
    )
  }

export default Product