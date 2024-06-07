/* eslint-disable react/prop-types */
import styled from "styled-components";
import logo from "../assets/logo.png";
import mcaffee from "../assets/McAfee_Secure.png";
import norton from "../assets/norton-antivirus-logo.png";

export const Subheader = ({ children }) => {
  return (
    <Container>
      {children || (
        <>
          <Logo src={logo} />{" "}
          <Sponsors>
            <McAffee src={mcaffee} />
            <Norton src={norton} />
          </Sponsors>
        </>
      )}
    </Container>
  );
};
const Sponsors = styled.div`
  display: flex;
`;
const Logo = styled.img``;
const McAffee = styled.img``;
const Norton = styled.img``;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: start;
  height: auto;
  width: 100%;
`;
