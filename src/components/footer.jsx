/* eslint-disable react/prop-types */
import styled from "styled-components";
import { StyledContainer, MaxWidthContent } from "./sharedStyles";

export const Footer = ({ children }) => {
  return (
    <StyledFooter>
      <MaxWidthContent>{children || "Footer"}</MaxWidthContent>
    </StyledFooter>
  );
};

const StyledFooter = styled(StyledContainer)`
  min-height: 88px;
  align-self: end;
`;
