import styled from "styled-components";
import Footer from "../components/Footer";

const Container = styled.div`
  padding: 20px;
`

const Introduction = styled.div`
  flex: 1;
  padding: 10px;
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
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  margin: 20px;
  font-weight: 200;
`;

const Header = styled.h3`
  padding-left: 60px;
  font-weight: 200;
`;

const Desc = styled.div`
  margin: 20px;
`;


const Project = () => {
  return (
    <Container>
      <Introduction>
        <Title>Personas</Title>
        <Desc>
            In this project, I set out to develop different personas to encapsulate different user approaches to and experiences with
            a vending machine. 
        </Desc>
      </Introduction>
      <Wrapper>
        <ImgContainer>
          <Image src="https://storage.googleapis.com/uxfolio/633b6ad21d43db0003adbb62/633b7d0c1d43db0003adbb99/FXtY43rZfsISfRls.png" />
        </ImgContainer>
        <InfoContainer>
          <Desc>
          To the left sits a rough sketch of a contemporary Coca-Cola vending machine, which can be found throughout college campuses. The machine features a small horizontal screen at the top. Below it lies a control panel, featuring a card reader, a set of control buttons (with a coin slot), and a dispensing window for the drinks inside. While in standby, the top dialogue reads "SELECT YOUR PURCHASE" while the card reader displays "SWIPE TO BEGIN."
          </Desc>
          <Desc>
          To operate the machine, a user may enter the corresponding number/letter code for their product of choice. The top dialogue will display the price, but will not yet enter "purchase mode." For the machine to enter the flow of a purchase, the user must first swipe their card with the card reader to place a hold on their account, then enter their product's corresponding code. The drink is then brought to the dispensing window below the control panel.
          </Desc>
          <Desc>
          For this project, I wanted to see how users feel about this specific flow, and if they found it productive or repetitive. Read about my process below.
          </Desc>
        </InfoContainer>
      </Wrapper>
      <Header>Observations and Surveys</Header>
      <Wrapper>
        <InfoContainer>
          <Desc>
          I began my process by observing how everyday users interacted with the vending machine. From a moderate distance, I closely noted how different users approached the machine and how they navigated across its various containers, and looked for any "hiccups" in their interactions. When I noticed a user struggled with the machine, I would follow up with a brief questionnaire (listed in the next section). In total, I counted:
          </Desc>
          <Desc>
          - 8 observed users
          </Desc>
          <Desc>
          - 4 interviews
          </Desc>
          <Desc>
          - 1 failed attempted use
          </Desc>
        </InfoContainer>
      </Wrapper>
      <Header>Results</Header>
      <Wrapper>
        <InfoContainer>
          <Desc>
          Here are some highlights from my observations:
          </Desc>
          <Desc>
          1. When you approach a vending machine, which part does your eye gravitate towards?
          </Desc>
          <Desc>
          Users found they first gravitated to the window display before looking to the card reader just below eye level.
          </Desc>
          <Desc>
          2. Can you trace a line of how you navigate across the machine?
          </Desc>
          <Desc>
          The observed group generally moved left to right, then down. The most typical path began at the drink window before moving to the touch pad, entering the number of the desired product, swiping a card, then entering the number again. 50% of interviewed users said the path felt tedious or "loopy," and another 50% were frustrated by the presence of two screens (the product display screen and the attached card reader) with conflicting dialogues.
          </Desc>
          <Desc>
          3. When does this flow get interrupted?
          </Desc>
          <Desc>
          Users who followed the path listed above felt that having to enter the product number twice took them out of the flow of the interface. However, one stated that this repetition might be beneficial, as it requires a confirmation of the intended purchase.
          </Desc>
        </InfoContainer>
      </Wrapper>
      <Header>User Personas</Header>
      <Wrapper>
        <InfoContainer>
          <Desc>
          I wanted to form a deeper understanding of our users' goals, needs, experiences, and behaviors. So, I created two personas to represent some different approaches the vending machine's interface. I wanted to ask myself:

What kinds of backgrounds and expectations do people approach the machines with?

How do these backgrounds affect their flow through the interface?

What kinds of experiences do different personas walk away from the machine with?
          </Desc>
        </InfoContainer>
      </Wrapper>
      <Wrapper>
        <ImgContainer>
          <Image src="https://storage.googleapis.com/uxfolio/633b6ad21d43db0003adbb62/633b7d0c1d43db0003adbb99/sJpv7BoaebcD7no0.png" />
        </ImgContainer>
        <ImgContainer>
          <Image src="https://storage.googleapis.com/uxfolio/633b6ad21d43db0003adbb62/633b7d0c1d43db0003adbb99/xiQdq2LYhjN3Ovbu.png" />
        </ImgContainer>
      </Wrapper>
      <Wrapper>
        <InfoContainer>
          <Desc>
          After crafting these four-quadrant persona maps, I set out to narratively map the experience of my second persona, James, through a storyboard.
          </Desc>
        </InfoContainer>
      </Wrapper>
    <Footer></Footer>
    </Container>
  )
}

export default Project