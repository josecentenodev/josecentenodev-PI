import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const PageButton = styled.button`
  background-color: ${({ active }) => (active ? '#007BFF' : '#f4f4f4')};
  color: ${({ active }) => (active ? '#fff' : '#393c41')};
  font-size: 12px;
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

export const NavButton = styled.button`
  background-color: #007BFF;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  border-radius: 4px;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;