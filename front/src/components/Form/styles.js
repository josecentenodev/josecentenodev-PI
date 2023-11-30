import styled from "styled-components";

export const StyledTitle = styled.h1`
  margin: 0 0 40px;
  text-align: center;
`;

export const StyledForm = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 40px 0;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 330px;
  padding: 0 12px;
  margin-bottom: 20px;
  gap: 5px;
`;

export const StyledLabel = styled.label`
color: #393c41;
font-weight: 500;
`;

export const StyledInput = styled.input`
  outline: none;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-weight: 500;
`;
export const StyledTextArea = styled.textarea`
  outline: none;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-weight: 500;
`;
