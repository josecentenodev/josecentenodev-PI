import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 10px;
gap: 100px;
`
export const InputWrapper = styled.div`
display: flex;
gap: 10px;
`


export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px
`;

export const PageButton = styled.button`
  background-color: ${({ active }) => (active ? "#007BFF" : "#f4f4f4")};
  color: ${({ active }) => (active ? "#fff" : "#393c41")};
  font-size: 16px;
  font-weight: 300;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  border-radius: 4px;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const PageInput = styled.input`
  outline: none;
  width: 100px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-weight: 500;
`;

export const ConfirmButton = styled.button`
  background-color: #fff;
  cursor: pointer;
  transition: background-color ease 0.3s;
  padding: 4px 8px;
  border-radius: 4px;
  min-width: 50px;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  border: none;
  min-width: 100px;

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const NavButton = styled.button`
  background-color: #fff;
  font-size: 25px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  border-radius: 4px;

  &:disabled {
    cursor: not-allowed;
  }
`;

