import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Heading>
      <MainText>THE PLANETS</MainText>
      <MenuIng src="/assets/icon-hamburger.svg" alt="menu" />
    </Heading>
  );
}

const Heading = styled.header`
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const MainText = styled.h1`
  font-size: 28px;
  font-weight: 500;
  letter-spacing: -1.05px;
  color: white;
`;
const MenuIng = styled.img`
  opacity: 0.25;
`;
export default Header;
