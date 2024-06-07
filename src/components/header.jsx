/* eslint-disable react/prop-types */
import styled from "styled-components";
import { StyledContainer, MaxWidthContent } from "./sharedStyles";

export const Header = ({ children }) => {
  return (
    <StyledHeader>
      <MaxWidthContent>{children || "Header"}</MaxWidthContent>
    </StyledHeader>
  );
};

const StyledHeader = styled(StyledContainer)`
  align-self: start;
`;
