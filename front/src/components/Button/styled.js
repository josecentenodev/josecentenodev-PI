import styled from "styled-components";

export const StyledButton = styled.button`
  text-decoration: none;
  color: #393c41;
  cursor: pointer;
  transition: background-color ease 0.3s;
  padding: 4px 8px;
  border-radius: 4px;
  min-width: 100px;
  max-width: 200px;
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  border: none;
  background-color: #fff;

  &:hover {
    background-color: #f2f2f2;
  }

  &:disabled {
    opacity: 0.4;
  }
`;
