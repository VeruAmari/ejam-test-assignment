import styled from "styled-components";
import { StyledContainer } from "./sharedStyles";

export const Footer = ({ children }) => {
  return <StyledFooter>{children || "Footer"}</StyledFooter>;
};

const StyledFooter = styled(StyledContainer)``;
