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
`;

const ImgContainer = styled.div`
  align-items: center;
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
        <Title>E-Commerce Development</Title>
        <Desc>
        In this project, I set out to develop an e-commerce shop with basic front-end functionality. 
        </Desc>
        <Desc>
        I wanted to design a sleek online record shop that might mimmic the experience of shopping for records in person.
        </Desc>
        <Desc>
        Using React JS, I implemented the site's landing page, which displays a gallery of records which can be filtered 
        by size and genre and sorted by price or newness.
        </Desc>
        <Desc>
          <a href="https://greedygrievous999.github.io/Development/" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>You can check out the site here, or read more about it below:</a>
        </Desc>
      </Introduction>
      <Header>My Design Process</Header>
      <Wrapper>
        <InfoContainer>
        <Desc>
          Mohawk Records is an imagined record store which stocks highly-curated selections of electronic and experimental music. 
          Their stock ranges from dreamy ambient to gritty post-punk, yet maintains a preference for a spacious, minimal sonic atmosphere.
          I wanted to create a sleek shop that might reflect the aesthetic sensibility of its products.
          </Desc>
          <Desc>
          I opted for a grid gallery without any text information in order to replicate the often mysterious process of buying records 
          at a shop. When buying records, I often base my selections first on the album art. For my site, I allow users to first survey
          record art before revealing the details.
          </Desc>
          <Desc>
            Shoppers can explore the whole gallery before arriving at the cart section at the botton
             (much like shopping for records in person). This layout makes the shopping process intuitive and linear.
          </Desc>
        </InfoContainer>
        <ImgContainer>
          <Image src="https://i.imgur.com/HfLW1u1_d.jpg?maxwidth=4000&shape=thumb&fidelity=high"/>
        </ImgContainer>
      </Wrapper>
      <Header>Functionality</Header>
      <Wrapper>
        <InfoContainer>
          <Desc>
            I initially designed my site to be full-stack enabled, fetching data from a MongoDB API. However, I ran into some issues
            and decided to pivot to strictly front-end functionality. To see the program in detail, you can check out the repository <a href="https://github.com/greedygrievous999/Development">here</a>. 
          </Desc>
          <Header>
            Filtering and sorting:
          </Header>
          <Wrapper>
            <ImgContainer>
              <Image src="https://i.imgur.com/7cp18fM_d.jpg?maxwidth=4000&shape=thumb&fidelity=high"/>
            </ImgContainer>
          <InfoContainer>
            <Desc>
              I chose to filter by genre and size because they seemed the two most essential metrics for a given shopper. Not all record 
              shoppers have turntables that can accommodate 10-inch records, which require a 45rpm motor, so size filtering seemed a good
              addition to the site. 
            </Desc>
            <Desc>
              Users can sort by price (ascending or descending) or by newness, with newness (descending) set as the default.  
            </Desc>
            <Desc>
              The landing page filters by data from a json file, which contains different data elements for different products in the shop.
               Products contain artist, title, price, genre, and size information. 
            </Desc>
            <Desc>
              Upon checking a certain filter in the interface, the landing page uses state to filter the displayed data accordingly. 
            </Desc>
          </InfoContainer>
          </Wrapper>
          <Header>
            Add to cart:
          </Header>
          <Wrapper>
            <ImgContainer>
              <Image src="https://i.imgur.com/HNHVkkG_d.jpg?maxwidth=4000&shape=thumb&fidelity=high"/>
            </ImgContainer>
            <InfoContainer>
              <Desc>
                I implemented add-to-cart functionality by using State to add data elements to a cart array, which gets fetched in the cart component
                at the bottom of the landing page. 
              </Desc>
              <Desc>
                The cart component displays the relevant details, and allows users to increase and decrease the quantity of a given item
              </Desc>
              <Desc>
                The right side of the cart component sums the prices of the elements in the cart array before adding a calculated tax and shipping.
                Cart totals over $100 yield free shipping. 
              </Desc>
            </InfoContainer>
          </Wrapper>
        </InfoContainer>
      </Wrapper>
      <Header>Reflection</Header>
      <Wrapper>
        <InfoContainer>
          <Desc>
            This project proved majorly helpful in building my skills as a front-end developer. React proved to be my favorite language
            to work in thus far, and will likely be my main language for any front-end development going forward. I loved implementing 
            different visual effects as well as generating functionality by using State. 
          </Desc>
          <Desc>
            If I were to continue this project, I'd like to build out single product pages for each record, which might display reviews,
            ratings, and distributor info. 
          </Desc>
          <Desc>
            I would also add a separate cart page that links from the cart icon on the landing page, along with search functionality. 
          </Desc>
          <Desc>
            Once again, you can take a look at my site <a href="https://greedygrievous999.github.io/Development/">here</a>.
          </Desc>
        </InfoContainer>
      </Wrapper>
    <Footer></Footer>
    </Container>
  )
}

export default Project