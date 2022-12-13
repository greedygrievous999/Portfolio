import styled from "styled-components";
import Footer from "../components/Footer";

const Container = styled.div`
  padding: 20px;
`

const Introduction = styled.div`
  flex: 1;
  padding: 30px;
`

const Header = styled.h1`
  font-weight: 400;
`;

const Indent = styled.div`
  margin-left: 30px;
`

const Desc = styled.p`
  margin: 20px 0px;
`;


const Project = () => {
  return (
    <Container>
      <Introduction>
        <Header>About</Header>
        <Desc>
            Greedy grievous is a web designer based in Providence, Rhode Island. He aims to develop forward-thinking interfaces for users of
            diverse, safer and more equitable internet. 
        </Desc>
        <Desc>
            His design skills include: 
        </Desc>
        <Indent>
          <Desc>
            Prototype design for web and mobile
          </Desc>
          <Desc>
            User testing and statistical analysis 
          </Desc>
          <Desc>
            HTML/CSS, React, Flutter, and MongoDB development
          </Desc>
        </Indent>
        <Desc>
          You can contact him at greedy@greedygrievous999.com
        </Desc>
      </Introduction>
    <Footer></Footer>
    </Container>
  )
}

export default Project