/* eslint-disable react/prop-types */
import styled from "styled-components";
import { StyledContainer, MaxWidthContent } from "./sharedStyles";
import { Encryption } from "./encryptionNotice";
import line from "../assets/longVerticalLine.svg";

export const Footer = ({ children }) => {
  return (
    <StyledFooter>
      <Container>
        {children || (
          <>
            <Copyright>
              Copyright (C) 2023 <img src={line} />{" "}
              clarifionsupport@clarifion.com
            </Copyright>
            <Encryption />
          </>
        )}
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled(StyledContainer)`
  min-height: 88px;
  align-self: end;
`;
const Container = styled(MaxWidthContent)`
  display: flex;
  justify-content: space-between;
`;
const Copyright = styled.div`
  display: flex;
  gap: 1rem;
`;
