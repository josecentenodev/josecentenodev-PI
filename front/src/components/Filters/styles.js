import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const Dropbtn = styled.button`
  text-decoration: none;
  color: #393c41;
  margin-right: 12px;
  cursor: pointer;
  transition: background-color ease 0.3s;
  padding: 4px 8px;
  border-radius: 4px;
  min-width: 100px;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  border: none;
  background-color: #fff;

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const DropdownContent = styled.div`
  flex-direction: column;
  justify-content: space-evenly;
  align-items: baseline;
  padding: 0 24px;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 350px;
  height: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  @media screen and (max-width: 1240px) {
    right: 0;
  }
`;

export const StyledLabel = styled.label`
  font-weight: 400;
  color: #393c41;
`;
export const PageInput = styled.input`
  outline: none;
  width: 80px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

export const StyledOption = styled.option`
color: #393c41;
padding: 15px;
`;

export const StyledSelect = styled.select`
  outline: none;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;
