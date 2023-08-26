import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
`;

export const Boards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 15px;
`;

export const Card = styled.div<{ $isDragging: boolean }>`
  padding: 10px 15px;
  margin-bottom: 5px;
  border-radius: 10px;
  color: ${(props) => (props.$isDragging ? "#CDD3DE" : "black")};
  background-color: ${(props) =>
    props.$isDragging ? "#222834" : props.theme.cardColor};
  box-shadow: ${(props) =>
    props.$isDragging ? "0px 2px 5px rgba(0,0,0,0.5)" : "none"};
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 20px;
`;
