import React from "react";
import styled from "styled-components";

interface IProject {
  name: string;
  url: string;
  thumnail: string;
  skills: string[];
  githubUrl: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 5px;
  &:hover {
    opacity: 0.8;
  }
`;

const Thumnail = styled.img`
  width: 100%;
  height: 80%;
  border-radius: 5px;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const NameContainer = styled.div`
  padding: 20px;
  font-size: 18px;
  font-weight: 700;
`;

const GithubContainer = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  font-size: 10px;
  font-weight: 500;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: transform 0.2s ease-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const Project: React.FC<IProject> = ({
  name,
  url,
  thumnail,
  skills,
  githubUrl,
}) => {
  return (
    <Container>
      <a href={url}>
        <ContentContainer>
          <Thumnail src={thumnail} />
          <NameContainer>{name}</NameContainer>
          <GithubContainer>
            <a href={githubUrl}>My Github</a>
          </GithubContainer>
        </ContentContainer>
      </a>
    </Container>
  );
};

export default Project;
