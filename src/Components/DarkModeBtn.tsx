import React from "react";
import styled from "styled-components";
import { IoMdMoon } from "react-icons/io";
import { FaSun } from "react-icons/fa";

interface IDarkModeBtn {
  setDark: () => void;
  dark: boolean;
}

const Container = styled.div``;

const ModeButton = styled.div`
  font-size: large;
  border: 1px solid ${(props) => props.theme.color};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  margin-right: 20px;
  margin-bottom: 10px;
  transition: transform 0.2s ease-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const IconSpan = styled.span`
  margin-left: 5px;
`;

const DarkModeBtn: React.FC<IDarkModeBtn> = ({ setDark, dark }) => {
  return (
    <Container>
      <ModeButton onClick={setDark}>
        {dark ? (
          <FaSun
            style={{
              color: "red",
            }}
          />
        ) : (
          <IoMdMoon
            style={{
              color: "#CCCC00",
            }}
          />
        )}{" "}
        <IconSpan>{dark ? "Light" : "Dark"}</IconSpan>
      </ModeButton>
    </Container>
  );
};

export default DarkModeBtn;
