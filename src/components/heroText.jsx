import styled from "styled-components";

export const Hero = ({ children }) => {
  return (
    <Container>
      {children || (
        <>
          <HeroText />
          <HeroSubtext />
        </>
      )}
    </Container>
  );
};

const HeroText = () => (
  <StyledHeroText>Wait! Your Order In Progress.</StyledHeroText>
);
const HeroSubtext = () => (
  <StyledHeroSubtext>
    Lorem ipsum dolor sit amet, consectetur adipiscing
  </StyledHeroSubtext>
);
const StyledHeroText = styled.div`
  font-size: 48px;
`;
const StyledHeroSubtext = styled.div`
  font-size: 24px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
