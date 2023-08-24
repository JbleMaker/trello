import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 680px;
  width: 100%;
  height: 100vh;
`;

export const Boards = styled.div`
  display: grid;
  width: 100%;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`;

export const InsideBoard = styled.div`
  padding-top: 30px;
  padding: 20px 10px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 10px;
  min-height: 200px;
`;

export const Card = styled.div`
  padding: 10px 10px;
  margin-bottom: 5px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.cardColor};
`;
