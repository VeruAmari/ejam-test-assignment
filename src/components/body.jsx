import styled from "styled-components";

export const Body = ({ children }) => {
  return <Container>{children || "Hello World"}</Container>;
};

const Container = styled.div``;
