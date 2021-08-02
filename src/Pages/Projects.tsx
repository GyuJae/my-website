import React from "react";
import styled from "styled-components";
import Category from "../Components/Category";
import Project from "../Components/Project";
import { useProjects } from "../Contexts/ProjectContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProjectContainer = styled.div`
  padding-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 400px);
  gap: 50px 35px;
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 450px);
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 500px);
  }
`;

const Projects = () => {
  const projects = useProjects();

  return (
    <Container>
      <Category />
      <ProjectContainer>
        {projects &&
          projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
      </ProjectContainer>
    </Container>
  );
};

export default Projects;
