import React from "react";
import {
  Hero,
  StyledTitle,
  InfoContainer,
  StyledSecondTitle,
  InfoCardContainer,
  CardTitle,
  CardText
} from "./syles";

const Info = () => {
  return (
    <>
      <Hero
        src="/hero2.jpg"
        alt="hero"
      />
      <StyledTitle>La Fórmula Uno</StyledTitle>

      <StyledSecondTitle>
        La Fórmula Uno (F1) es la categoría más alta de competición de
        automovilismo a nivel mundial.
      </StyledSecondTitle>
      <StyledSecondTitle>
        Aquí hay algunos aspectos clave sobre la F1:
      </StyledSecondTitle>
      <InfoContainer>
        <InfoCardContainer>
          <CardTitle>1. Equipos</CardTitle>
          <CardText>
            La F1 está compuesta por equipos, cada uno con dos pilotos. Algunos
            de los equipos más conocidos son Mercedes, Ferrari, Red Bull Racing,
            entre otros.
          </CardText>
        </InfoCardContainer>
        <InfoCardContainer>
          <CardTitle>2. Carreras</CardTitle>
          <CardText>
            La temporada de F1 consiste en una serie de carreras llamadas
            Grandes Premios que se llevan a cabo en circuitos de todo el mundo.
            Cada carrera otorga puntos a los pilotos y equipos según su
            rendimiento.
          </CardText>
        </InfoCardContainer>
        <InfoCardContainer>
          <CardTitle>3. Pilotos</CardTitle>
          <CardText>
            Los pilotos de F1 son algunos de los mejores y más talentosos del
            mundo. Participan en clasificaciones y carreras para ganar puntos y
            competir por el campeonato mundial de pilotos.
          </CardText>
        </InfoCardContainer>
        <InfoCardContainer>
          <CardTitle>4. Tecnología</CardTitle>
          <CardText>
            La F1 es conocida por la innovación tecnológica en el automovilismo.
            Los equipos utilizan tecnologías avanzadas para mejorar el
            rendimiento de los coches, desde aerodinámica hasta sistemas de
            propulsión.
          </CardText>
        </InfoCardContainer>
        <InfoCardContainer>
          <CardTitle>5. Reglamentación</CardTitle>
          <CardText>
            La F1 tiene reglas estrictas que rigen aspectos como el diseño de
            los coches, el límite de presupuesto de los equipos y el
            comportamiento en pista. Estas reglas se actualizan periódicamente
            para mantener la competición justa y emocionante.
          </CardText>

          <CardText>
            La Fórmula Uno es seguida por millones de fanáticos en todo el
            mundo, y cada temporada ofrece emoción, velocidad y competencia
            intensa.
          </CardText>
        </InfoCardContainer>
      </InfoContainer>
    </>
  );
};

export default Info;
