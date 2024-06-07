import styled from "styled-components";
import { StyledContainer } from "./sharedStyles";

export const Header = ({ children }) => {
  return <StyledHeader>{children || "Header"}</StyledHeader>;
};

const StyledHeader = styled(StyledContainer)``;
