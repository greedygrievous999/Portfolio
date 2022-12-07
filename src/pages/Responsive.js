import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div`
  padding: 20px;
`

const Introduction = styled.div`
  flex: 1;
  padding: 30px;
`

const Wrapper = styled.div`
  padding: 30px;
  display: flex;
`;

const ImgContainer = styled.div`
`;

const Image = styled.img`
  width: 100%;
  height: 40vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;
const Header = styled.h2`
  padding-left: 60px;
  font-weight: 200;
`;


const Project = () => {
  return (
    <Container>
      <Introduction>
        <Title>Responsive</Title>
        <Desc>
        I set out to redesign redesign the website for Clone, a Rotterdam-based record store, to better match their web design with the feel of their products.
        </Desc>
      </Introduction>
      <Header>Why Clone?</Header>
      <Wrapper>
        <InfoContainer>
          <Desc>
          Clone is one of my favorite record stores for dance music. The shop stocks lots of exciting techno and trance records, but their website has always made browsing their catalog quite difficult for me. The two-column design is quite dense, and the organization of browsing categories isn’t the most intuitive.

On top of the organizational issues, I found that the dated stylizations of the site fail to capture their forward-thinking music catalog and sensibility. 

Here you can see the site’s homepage. Below, I’ll list out the primary issues with the site. 
          </Desc>
        </InfoContainer>
        <ImgContainer>
          <Image src="https://images.squarespace-cdn.com/content/v1/6353066141d1fa436529b061/6760e66d-ed35-4852-9b46-98cf73e18418/Screen+Shot+2022-10-21+at+5.52.05+PM.png?format=2500w"/>
        </ImgContainer>
      </Wrapper>
      <Wrapper>
      <ImgContainer>
          <Image src="https://i.imgur.com/42c5wMz.png"/>
        </ImgContainer>
        <InfoContainer>
          <Desc>
          I deployed my website with the help of a handful of helpful HTML/CSS tools which helped automate some of the laborious tasks in programming my website. I had initially tried to hand-code the website entirely, but struggled to retain re given my lack of prior HTML skills and limited course resources. I hope to finish hand-coding the HTML/CSS for my final portfolio. 
          </Desc>
        </InfoContainer>
      </Wrapper>
    <Footer></Footer>
    </Container>
  )
}

export default Project