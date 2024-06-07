import styled from "styled-components";

export const Steps = ({ children }) => {
  return <Container> {children || "Steps"} </Container>;
};

const Container = styled.div``;
