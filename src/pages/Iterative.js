import styled from "styled-components";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

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
  justify-content: center;
`;

const ImgContainer = styled.div`
  align-items: center;
  justify-content: center;
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
  font-weight: 400;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;
const Header = styled.h2`
  padding-left: 60px;
  font-weight: 300;
`;


const Project = () => {
  return (
    <Container>
      <Introduction>
        <Title>Mobile Search Design</Title>
        <Desc>
        In this project, I designed a comprehensive Figma prototype of a mobile app for <a href="https://www.ycombinator.com/companies/andi">Andi</a>, a new search engine startup.
        </Desc>
        <Desc>
        Andi uses AI & language models to create a better search engine. Instead of the the SEO optimized, advertisement cluttered, 
        and data tracking current state of online search engines, Andi summerizes it's findings, giving simple answers to it's users.
        </Desc>
        <Desc>
        In line with it's product vision, Andi is primarily for users who are no longer interested in being the product - 
        specifically people frustrated by endless ads, data tracking, and convoluted search results. This encapsulates a large segment of 
        potential customers, but as a tech minded alterative to the current industry giants, Andi is likely most relevant to users who are
        digitally native, frequently use search engines like Google or Yahoo (and are familiar with their layout).
        </Desc>
      </Introduction>
      <Header>Wireframes</Header>
      <Wrapper>
        <ImgContainer>
          <Image src="https://iterative-design.vercel.app/New-Wireframe-1.png" />
        </ImgContainer>
        <InfoContainer>
          <Desc>
          Me and my team mocked up this concept in Balsamiq. 
          </Desc>
          <Desc>
          We decided to stick with box-based results that summarizes the most relevant information/high-level summary first, and then follows up with more context. In this way, search results more directly answer the user's inquiry and if needed they can easily find more related information.
          </Desc>
          <Desc>
          We also included an "About Andi" modal that communicates Andi's unique mission to users.
          </Desc>
        </InfoContainer>
      </Wrapper>
      <Header>Figma Mockup</Header>
      <Wrapper>
        <ImgContainer>
          <iframe width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FBCnAbV3iPSP5MVIB2xK0eJ%2Fiterative%3Fnode-id%3D2%253A35%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D2%253A35" allowfullscreen></iframe>
        </ImgContainer>
      </Wrapper>
      <Header>User Testing</Header>
      <Wrapper>
        <InfoContainer>
          <Desc>
            After completing the Figma prototype, we sent our design through a user testing regiment. Using UserTesting.com, we sent in our 
            interactive prototype with the following prompt:
          </Desc>
          <Desc>
          "Andi is a search engine that uses generative AI models to generate simple answers to your questions. 
          Presented here is a prototype of Andi's user interface designed specifically for mobile users. 
          Suppose you want to visit the Brown Computer Science Department offices. 
          Using Andi, find the location of the Brown CS department and open the location in Apple Maps. 
          As you complete the task, please think aloud so that our designers can better understand your train of thought while using the interface. Thank you!"
          </Desc>
        </InfoContainer>
      </Wrapper>
      <Wrapper>
        <InfoContainer>
          <Desc>We also included the following subtasks in our request:</Desc>
        </InfoContainer>
        <InfoContainer>
          <Desc>1. Using Andi, search for "Brown CS"</Desc>
          <Desc>2. Navigate to the result containing the department's location</Desc>
          <Desc>3. Open the building's location in "Maps"</Desc>
        </InfoContainer>
      </Wrapper>
      <Header>Feedback</Header>
      <Wrapper>
        <InfoContainer>
          <Desc>
            One user expressed trouble figuring out whether he was supposed to select from the field of 
            search queries automatically populated in the search bar or to click the search button call-to-action (CTA).
          </Desc>
          <Desc>
            One user expressed trouble figuring out whether he was supposed to select from the field of 
            search queries automatically populated in the search bar or to click the search button call-to-action (CTA).
          </Desc>
          <Desc>
          Two users expressed difficulty with noticing the maps icon when on the search results page. 
          Since this was a bottleneck for completing the final sub-task of getting to the map view for two of the three users, 
          we think that an area for improvement on our interface would be
          </Desc>
          <InfoContainer>
            <Desc>
            1) making the map icon more prominent to the user and
            </Desc>
            <Desc>
            2) making the task more clear on the screen overall.
          </Desc>
          </InfoContainer>
        </InfoContainer>
        <ImgContainer>
          <iframe width="468" height="315" src="https://www.youtube.com/embed/PQk1jDrAmGw" title="Andi UserTesting 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </ImgContainer>
      </Wrapper>
      <Header>Reflection</Header>
      <Wrapper>
        <InfoContainer>
          <Desc>
          This project was a great opportunity for me to apply my UI/UX design skills to the real world by developing an interface
          for a real world company.
          </Desc>
          <Desc>
            Our team ultimately shared our prototype with the team at Andi, who said they really appreciated seeing our work, and thought
            they might incorporate some of our design ideas into their scaled product.
          </Desc>
          <Desc>
            The project also provided a great opporunity to continually improve my designs based on outside feedback. Working with user 
            testing helped build on my on my work in the <Link to="/personas" target="_black">Personas</Link> project by formally outsourcing
            feedback with better controlled variables.
          </Desc>
          <Desc>
            I'm super excited to see what the folks at <a href="https://www.ycombinator.com/companies/andi">Andi</a> do in the future!
          </Desc>
        </InfoContainer>
      </Wrapper>
    <Footer></Footer>
    </Container>
    
  )
}

export default Project