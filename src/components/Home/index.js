import Intro from "../Intro";
import Sign from "../Sign";
import styled from "styled-components";

const HomeWrapper = styled.div`
  height: 100vh;
  display: flex;
`;

const HomeContainer = styled.div`
  width: 50%;
`;

const HomeLeftContainer = styled(HomeContainer)`
  background: black;
  display: flex;
  justify-content: center;
`;

const HomeRightContainer = styled(HomeContainer)`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 1%;
  right: 1%;
`;

const Copyright = styled.div`
  color: rgb(114, 114, 114);
  font-weight: 100;
  font-size: 0.8rem;
`;

function Home() {
  return (
    <HomeWrapper>
      <HomeLeftContainer>
        <Intro></Intro>
      </HomeLeftContainer>
      <HomeRightContainer>
        <Sign />
        <Footer>
          <Copyright>made by João Donghia</Copyright>
        </Footer>
      </HomeRightContainer>
    </HomeWrapper>
  );
}

export default Home;
