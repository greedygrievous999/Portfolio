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
        <Title>Iterative</Title>
        <Desc>
        For this project, our group chose Andi, a startup using AI & language models to create a better search engine. Instead of the the SEO optimized, advertisement cluttered, and data tracking current state of online search engines, Andi summerizes it's findings, giving simple answers to it's users.
        </Desc>
        <Desc>
        While Andi operates across interfaces, we are designed specifically for their mobile application. In line with it's product vision, Andi is primarily for users who are no longer interested in being the product - specifically people frustrated by endless ads, data tracking, and convoluted search results. This encapsulates a large segment of potential customers, but as a tech minded alterative to the current industry giants, Andi is likely most relevant to users who are digitally native, frequently use search engines like Google or Yahoo (and are familiar with their layout), and are interested in need and actively searching for a better alterative.
        </Desc>
        <Desc>
        Andi would change the game - with users no longer needing to deal with endless adverts polluting their experience, more direct & accurate answers based on searches (helpful for researchers/frequent searchers), and also a friendlier UI that encourages exploration and highlights the most crucial information.
        </Desc>
      </Introduction>
      <Header>Wireframes</Header>
      <Wrapper>
        <ImgContainer>
          <Image src="https://iterative-design.vercel.app/New-Wireframe-1.png" />
        </ImgContainer>
        <InfoContainer>
          <Desc>
          We then mocked up this concept in Balsamiq. In the end, we decided to follow a more traditional search engine layout, displayed in the second image, commmincating Andi's difference in the simplcity of the search results. We decided to stick with box-based results that summarizes the most relevant information/high-level summary first, and then follows up with more context. In this way, search results more directly answer the user's inquiry and if needed they can easily find more related information. We agreed that stepping too far out of convention would go against Andi's goal of creating a smoother, simpler search experience. We also included an "About Andi" modal that communicates Andi's unique mission to users.
          </Desc>
        </InfoContainer>
      </Wrapper>
    <Footer></Footer>
    </Container>
  )
}

export default Project