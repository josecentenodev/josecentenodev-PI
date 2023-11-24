import React from "react";
import { StyledLandingPage, StyledMainButton, ContentWrapper, StylesMainTitle, StyledSecondaryTitle } from "./styles";
import {useNavigate} from 'react-router-dom'

const Landing = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    console.log("Botón clickeado");
    navigate('/home')
  };
  return (
    <StyledLandingPage>
      <ContentWrapper>
      <StylesMainTitle>Explorá el mundo de Formula 1</StylesMainTitle>
      <StyledSecondaryTitle>y conocé sus pilotos!</StyledSecondaryTitle>
        <StyledMainButton onClick={handleClick}>Ingresar</StyledMainButton>
      </ContentWrapper>
    </StyledLandingPage>
  );
};

export default Landing;
