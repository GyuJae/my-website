import React from "react";
import styled from "styled-components";
import { useCategories } from "../Contexts/CategoryContext";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const CategoryIcon = styled.img`
  width: 50px;
  height: 50px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 50%;
  transition: transform 0.2s ease-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const Category = () => {
  const categories = useCategories();

  return (
    <Container>
      {categories.map((category, index) => (
        <CategoryIcon
          key={index}
          className={category.name}
          src={category.src}
        />
      ))}
    </Container>
  );
};

export default Category;
