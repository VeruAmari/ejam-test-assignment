/* eslint-disable react/prop-types */
import styled from "styled-components";
import { MaxWidthContent } from "./sharedStyles";

export const Body = ({ children }) => {
  return <Container>{children || "Hello World"}</Container>;
};

const Container = styled(MaxWidthContent)`
  justify-self: center;
  align-self: start;
  display: flex;
  flex-direction: column;
`;
