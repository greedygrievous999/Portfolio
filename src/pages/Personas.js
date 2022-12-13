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
  align-items: center;
  justify-content: center;
`;

const ImgContainer = styled.div`
  align-items: center;
  padding: 10px;
  flex: 1;
`;

const SlideImage = styled.img`
  max-height: 50%;
  max-width: 50%;
  object-fit: cover;
`

const Image = styled.img`
  max-height: 85%;
  max-width: 85%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  margin: 20px;
  font-weight: 400;
`;

const Header = styled.h1`
  padding-left: 60px;
  font-weight: 300;
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
            When starting new UI/UX projects, I often start by identifying different user personas for the interface I'm designing. In this project, I set out to research and identify different user personas for a vending machine on Brown University's campus. 
        </Desc>
      </Introduction>
      <Header>The Interface</Header>
      <Wrapper>
        <ImgContainer>
          <Image src="https://storage.googleapis.com/uxfolio/633b6ad21d43db0003adbb62/633b7d0c1d43db0003adbb99/FXtY43rZfsISfRls.png" />
        </ImgContainer>
        <InfoContainer>
          <Desc>
            To the left sits a rough sketch of a contemporary Coca-Cola vending machine, which can be found throughout college campuses. 
            The machine features a small horizontal screen at the top. Below it lies a control panel, featuring a card reader, a set of 
            control buttons (with a coin slot), and a dispensing window for the drinks inside. 
          </Desc>
          <Desc>
            While in standby, the top dialogue reads 
            "SELECT YOUR PURCHASE" while the card reader displays "SWIPE TO BEGIN."
          </Desc>
          <Desc>
            To operate the machine:  
          </Desc>
          <InfoContainer>
            <Desc>
              A user may enter the corresponding number/letter code for their product of choice. 
              The top dialogue will display the price, but will not yet enter "purchase mode."
            </Desc>
            <Desc>
              For the machine to enter the flow of a purchase, the user must first swipe their card with the card reader to place a 
              hold on their account, then enter their product's corresponding code.
            </Desc>
            <Desc> The drink is then brought to the dispensing window below the control panel.</Desc>
          </InfoContainer>
          <Desc>
          For this project, I wanted to see how users feel about this specific flow, and if they found it productive or repetitive. Read about my process below.
          </Desc>
        </InfoContainer>
      </Wrapper>
      <Header>Observations and Surveys</Header>
      <Wrapper>
        <InfoContainer>
          <Desc>
          I began my process by observing how everyday users interacted with the vending machine. When I noticed a user struggled with the machine, I would follow up with a brief questionnaire (listed in the next section). In total, I counted:
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
          The observed group generally moved left to right, then down. 50% of interviewed users said the path felt tedious or "loopy," and another 50% were frustrated by the presence of two screens (the product display screen and the attached card reader) with conflicting dialogues.
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
          </Desc>   
        </InfoContainer>
        <InfoContainer>
          <Desc>
          What kinds of backgrounds and expectations do people approach the machines with?
          </Desc>
          <Desc>
          How do these backgrounds affect their flow through the interface?
          </Desc>
          <Desc>
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
      <Wrapper>
        <ImgContainer>
          <SlideImage src="https://storage.googleapis.com/uxfolio/633b6ad21d43db0003adbb62/633b7d0c1d43db0003adbb99/sdsZsLoGzSpj6gWV.JPG" />
        </ImgContainer>
        <InfoContainer>
          <Desc>
          James approaches the vending machine with haste, as he needs to grab a drink before his next class. He immediately places his finger on the control panel while he scans the selection and chooses a Vitamin Water
          </Desc>
        </InfoContainer>
      </Wrapper>
      <Wrapper>
        <ImgContainer>
          <SlideImage src="https://storage.googleapis.com/uxfolio/633b6ad21d43db0003adbb62/633b7d0c1d43db0003adbb99/3zWsVu01XUr8wVtx.JPG" />
        </ImgContainer>
        <InfoContainer>
          <Desc>
          The top screen tells him the price of the drink (which he doesn't care about, as his parents are paying for it), and looks to the dialogue on the card reader (it says "Swipe to begin")
          </Desc>
        </InfoContainer>
      </Wrapper>
      <Wrapper>
        <ImgContainer>
          <SlideImage src="https://storage.googleapis.com/uxfolio/633b6ad21d43db0003adbb62/633b7d0c1d43db0003adbb99/EZk6B2G96kQnZZCk.JPG" />
        </ImgContainer>
        <InfoContainer>
          <Desc>
          He quickly swipes his card
          </Desc>
        </InfoContainer>
      </Wrapper>
      <Wrapper>
        <ImgContainer>
          <SlideImage src="https://storage.googleapis.com/uxfolio/633b6ad21d43db0003adbb62/633b7d0c1d43db0003adbb99/UaelrfJmx6v7fnOx.JPG" />
        </ImgContainer>
        <InfoContainer>
          <Desc>
          The top dialogue tells him to select his item, which frustrates him as he's already done this.
          </Desc>
        </InfoContainer>
      </Wrapper>
      <Wrapper>
        <ImgContainer>
          <SlideImage src="https://storage.googleapis.com/uxfolio/633b6ad21d43db0003adbb62/633b7d0c1d43db0003adbb99/AD1F3AHGTTitfJSn.JPG" />
        </ImgContainer>
        <InfoContainer>
          <Desc>
          He selects his item again on the control panel
          </Desc>
        </InfoContainer>
      </Wrapper>
      <Header>Reflection</Header>
      <Wrapper>
        <InfoContainer>
            <Desc>
            This project offered a great opportunity to research user interaction with a highly tactile and tangible interface, with lessons that will translate well to the design of digital interfaces. 
            </Desc>
            <Desc>
            By watching and interviewing users, I learned a bit about how users interpret and articulate their experiences with interfaces, and also how to compartmentalize different aspects of those experiences into specific traits/charactertistics.
            </Desc>
            <Desc>
            This project proved essential in my development as a UX designer, and continues to inform how I conceptualize and plan for different types of users of my interfaces. 
            </Desc>
            <Desc>
              <a href="https://uxfol.io/p/d9a41f1b/03adbb99">You can read more about the project on my UXFolio page here.</a>
            </Desc>
          </InfoContainer>
      </Wrapper>
    <Footer></Footer>
    </Container> 
  )
}

export default Project