import styled from 'styled-components';

export const StyledLandingPage = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('./background3.jpg');
    background-size: cover;
    background-position: center;
    filter: brightness(60%);
    z-index: -1;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StylesMainTitle = styled.h1`
  font-size: 40px;
  line-height: 40px;
  color: #fff;
  padding: 0;
  margin-bottom: 12px;
`;

export const StyledSecondaryTitle = styled.h3`
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  color: #fff;
  padding: 0;
`

export const StyledMainButton = styled.button`
  background-color: #f4f4f4;
  color: #393c41;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 20px;
  border: none;
  min-width: 283px;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: inset 0 0 0 2px transparent;
  margin-top: 100px;
  transition: background-color 0.3s, box-shadow 0.3s;
  &:active {
    background-color: #d1d1d1;
    box-shadow: inset 0 0 0 2px #393c41;
  }
`;


