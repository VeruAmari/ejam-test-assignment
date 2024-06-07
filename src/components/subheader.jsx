/* eslint-disable react/prop-types */
import styled from "styled-components";

export const Subheader = ({ children }) => {
  return <Container> {children || "Subheader"} </Container>;
};

const Container = styled.div``;
