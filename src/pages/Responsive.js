import { Info } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../components/Footer";

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
  padding: 10px;
  flex: 1;
`;

const Image = styled.img`
  max-height: 85%;
  max-width: 70%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 400;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Subhead = styled.span`
  margin: 20px 0px;
  font-size: 20px;
`;

const Header = styled.h2`
  padding-left: 60px;
  font-weight: 300;
`;


const Project = () => {
  return (
    <Container>
      <Introduction>
        <Title>Record Shop Redesign</Title>
        <Desc>
        In this project, I set out to create a modern, responsive redesign for a company whose services I love, but whose website I found issues with.
        </Desc>
        <Desc>
        I chose to create a prototype website redesign for Clone, a record store in Rotterdam, NL.
        </Desc>
        <Desc>
        This project proved crucial in developing my Figma and HTML/CSS skills, and also helped me develop a better sense of my 
        unique web design style. Read more about my process below.
        </Desc>
      </Introduction>
      <Header>Why Clone?</Header>
      <Wrapper>
        <InfoContainer>
          <Desc>
          Clone is one of my favorite record stores for dance music. The shop stocks lots of exciting techno and trance records, but their website has always made browsing their catalog quite difficult for me. 
          </Desc>
          <Desc>
          The two-column design is quite dense, and the organization of browsing categories isn’t the most intuitive. On top of the organizational issues, I found that the dated stylizations of the site fail to capture their forward-thinking music catalog and sensibility.
          </Desc>
          <Desc>
          Here you can see the site’s homepage. Below, I’ll list out the primary issues with the site.
          </Desc>
        </InfoContainer>
        <ImgContainer>
          <Image src="https://images.squarespace-cdn.com/content/v1/6353066141d1fa436529b061/6760e66d-ed35-4852-9b46-98cf73e18418/Screen+Shot+2022-10-21+at+5.52.05+PM.png?format=2500w"/>
        </ImgContainer>
      </Wrapper>
      <Header>Design Issues</Header>
      <Wrapper>
        <InfoContainer>
          <Subhead>Usability</Subhead>
          <Desc>The inconsistent use of color to identify a linked piece of text often left users unsure of where to click (and where clicks would lead them) when they wanted to interact with a record. </Desc>
          <Subhead>Learnability</Subhead>
          <Desc>
            The shop is heavily geared toward record enthusiasts. Curated sections based on certain qualifiers (recommended, label selections, for example) lack descriptions, making them hard to parse for new users.
            The learning curve for new users is quite steep. 
          </Desc>
          <Subhead>Memorability</Subhead>
          <Desc>The site's design is quite standard. Despite the occassional use of logos and the signature green color profile, the site seems quite generic, despite the store's very unique selections.</Desc>
          <Subhead>Accessibility</Subhead>
          <Desc>Low contrast text across carousel images and record listings make much of the information difficult, sometimes impossible to read.  The website relies heavily on white and gray with small fonts, making it difficult to read the information at 100% zoom even with my near perfect vision.</Desc>
          <Desc>The WAVE tool picked up 361 contrast errors across the site. </Desc>
        </InfoContainer>
      </Wrapper>
      <Header>My Process</Header>
      <Wrapper>
        <InfoContainer>
          <Desc>With these issues in mind, I set out to redesign the site’s homepage. I made sure to make full use of the window in order to amplify legibility of the images and text.</Desc>
          <Desc>I also wanted to provide a simpler organizational map, including streamlined navbars, and a relocated newsletter and blog to better display the shop's curatorial efforts</Desc>
          <Desc>I started my redesign by developing low fidelity sketches before mocking up a prototype in Figma</Desc>
        </InfoContainer>
      </Wrapper>
      <Wrapper>
        <InfoContainer>
          <Subhead>Low Fidelity Sketches</Subhead>
        </InfoContainer>
      </Wrapper>
      <Wrapper>
        <ImgContainer>
          <Image src="https://images.squarespace-cdn.com/content/v1/6353066141d1fa436529b061/2c2eebfe-425a-4c13-8bb5-01882affedf8/Screen+Shot+2022-10-21+at+5.42.22+PM.png?format=1500w" />
        </ImgContainer>
        <ImgContainer>
          <Image src="https://images.squarespace-cdn.com/content/v1/6353066141d1fa436529b061/f451e80e-363f-41e3-a5c2-44200d6e5781/Screen+Shot+2022-10-22+at+12.50.59+PM.png?format=500w" />
        </ImgContainer>
        <ImgContainer>
          <Image src="https://images.squarespace-cdn.com/content/v1/6353066141d1fa436529b061/530bca22-e598-4085-b6ec-f42ad53e4d24/Screen+Shot+2022-10-21+at+5.57.03+PM.png?format=1000w" />
        </ImgContainer>
      </Wrapper>
      <Wrapper>
        <InfoContainer>
          <Subhead>Style Guide</Subhead>
        </InfoContainer>
      </Wrapper>
      <Wrapper>
        <ImgContainer>
          <Image src="https://images.squarespace-cdn.com/content/v1/6353066141d1fa436529b061/8fba2322-f315-44d1-a6e3-f0b647eae296/Screen+Shot+2022-10-21+at+7.41.18+PM.png?format=1500w" />
        </ImgContainer>
        <InfoContainer>
          <Desc>The guide on the left shows the font and various components I used across my prototypes. Refering to this guide throughout my process helped me maintain a consistent visual style</Desc>
        </InfoContainer>
      </Wrapper>
      <Wrapper>
        <InfoContainer>
          <Subhead>High Fidelity Mockups</Subhead>
        </InfoContainer>
      </Wrapper>
      <Wrapper>
        <ImgContainer>
          <Image src="https://images.squarespace-cdn.com/content/v1/6353066141d1fa436529b061/54b2d31c-655a-4a29-8297-3d138c93a4b9/Screen+Shot+2022-10-21+at+6.15.40+PM.png?format=750w"/>
        </ImgContainer>
        <ImgContainer>
          <Image src="https://images.squarespace-cdn.com/content/v1/6353066141d1fa436529b061/8a50ff95-8550-4b3b-a3dd-bd4cd09efff1/Screen+Shot+2022-10-21+at+6.15.30+PM.png?format=750w"/>
        </ImgContainer>
      </Wrapper>
      <Wrapper>
        <InfoContainer>
          <Desc>
          I deployed my website with the help of <a href="https://function12.io/">Function12</a>, a Figma plug in which helps automate laborious CSS functions.  
          </Desc>
          <Desc>
          <a href="https://greedygrievous999.github.io/Development/">You can check out the deployed project here</a>
          </Desc>
        </InfoContainer>
      </Wrapper>
      <Wrapper>
        <InfoContainer>
          <Header>Reflection</Header>
        </InfoContainer>
      </Wrapper>
      <Wrapper>
        <InfoContainer>
          <Desc>This project was a major step in the development of my distinct visual style.</Desc>
          <Desc>
            Designing for a shop whose sonic palette I admire and cherish helped me imagine and execute a sleek and highly functional
            interface that amplifies the Clone's web "personality" and makes their services more accessible for all music lovers. 
          </Desc>
        </InfoContainer>
      </Wrapper>
    <Footer></Footer>
    </Container>
  )
}

export default Project