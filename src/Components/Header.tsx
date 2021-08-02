import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import DarkModeBtn from "./DarkModeBtn";

interface IHeader {
  setDark: () => void;
  dark: boolean;
}

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin-bottom: 20px;
  padding-top: 20px;
`;

const ItemContainer = styled.ul`
  display: flex;
  justify-content: space-around;
`;

const Item = styled.li<{ current: boolean }>`
  font-size: 15px;
  padding-bottom: 7px;

  &:not(:last-child) {
    margin-right: 10px;
  }
  &:first-child {
    margin-left: 10px;
  }
  ${({ current }) =>
    current &&
    `
    border-bottom: 2px solid;
  `}
`;

const Header: React.FC<IHeader> = ({ setDark, dark }) => {
  const { pathname } = useLocation();
  return (
    <Container>
      <ItemContainer>
        <Item current={pathname === "/"}>
          <Link to="/">Home</Link>
        </Item>
        <Item current={pathname === "/projects"}>
          <Link to="/projects">Project</Link>
        </Item>
      </ItemContainer>
      <DarkModeBtn setDark={setDark} dark={dark} />
    </Container>
  );
};

export default Header;
