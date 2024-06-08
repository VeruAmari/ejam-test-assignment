import styled from "styled-components";
import { Body } from "./components/body";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/heroText";
import { Subheader } from "./components/subheader";
import { Steps } from "./components/stepTracker";

function App() {
  return (
    <PageContainer>
      <Header />
      <Body>
        <Subheader />
        <Steps />
        <Hero />
      </Body>
      <Footer />
    </PageContainer>
  );
}

// Page container styles
const PageContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 100vw;
  height: 100vh;
`;

export default App;
