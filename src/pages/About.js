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
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;


const Project = () => {
  return (
    <Container>
      <Introduction>
        <Header>About</Header>
        <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
        </Desc>
      </Introduction>
    <Footer></Footer>
    </Container>
  )
}

export default Project