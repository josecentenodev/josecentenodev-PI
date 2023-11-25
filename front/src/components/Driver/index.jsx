import React from "react";
import {
  CardWrapper,
  TeamList,
  TeamItem,
  DriverImage,
  DriverInfo,
  InfoContainer,
  InfoTitle,
  InfoDoB,
  TeamsContainer,
  Teams
} from "./styles";
import { v4 as uuidv4 } from "uuid";

const Driver = ({ id, nombre, apellido, imagen, teams, fechaNacimiento }) => {
  const teamsArray = Array.isArray(teams)
    ? teams
    : teams.split(",").map((team) => ({
        id: uuidv4(), // Asignar un ID único si es una cadena de texto
        nombre: team.trim(), // Eliminar espacios en blanco
      }));
  return (
    <CardWrapper id={id}>
      <DriverImage
        src={imagen}
        alt={`${nombre} ${apellido}`}
      />
      <DriverInfo>
      <InfoContainer>
        <InfoTitle>{`${nombre} ${apellido}`}</InfoTitle>
        <InfoDoB>{`Nacimiento: ${fechaNacimiento}`}</InfoDoB>
      </InfoContainer>
      <TeamsContainer>
        <TeamList>
          <Teams>Escuderías:</Teams>
          {teamsArray.map((team) => (
            <TeamItem key={team.id}>{team.nombre}</TeamItem>
          ))}
        </TeamList>
      </TeamsContainer>
      </DriverInfo>
    </CardWrapper>
  );
};

export default Driver;
