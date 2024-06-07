import styled from "styled-components";
import lock from "../assets/lock (7) 1.svg";

export const Encryption = () => {
  return (
    <Container>
      <Lock src={lock} /> Secure 256-Bit SSL Encryption.
    </Container>
  );
};

const Lock = styled.img`
  color: #fff;
`;
const Container = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
