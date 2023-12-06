import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingContainer = styled.div`
  text-align: center;
`;

export const LoadingCircle = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid #393c41;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spinAnimation} 1s linear infinite;
`;

export const StyledContainer = styled.div`
display: flex;
justify-content: center;
width: 100%;
align-items: center;
height: 500px;
`

export const StyledTitle = styled.h1`
  color: #e1e1e1;
  text-shadow:  0 2px 4px rgba(0, 0, 0, 0.1);
`

