import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useDrivers from "../../hooks/useDrivers";
import { v4 as uuidv4, validate } from "uuid";
import {
  TeamList,
  TeamItem,
  DriverImage,
  DriverInfo,
  InfoContainer,
  InfoTitle,
  InfoDoB,
  TeamsContainer,
  Teams,
  InfoNationality,
  InfoDescription,
  InlineContainer,
} from "./styles";

const Detail = () => {
  let { id } = useParams();
  const { driver, getDriver } = useDrivers();

  useEffect(() => {
    getDriver(id);
  }, []);

  console.log(driver);
  return (
    <>
      <InfoTitle>{`${driver?.nombre ? driver.nombre : driver?.name?.forename} ${
        driver?.apellido ? driver.nombre : driver?.name?.surname
      }`}</InfoTitle>
      <InfoContainer>
        <DriverImage
          src={driver?.imagen ? driver.imagen : driver?.image?.url}
          alt={`${driver?.nombre ? driver.nombre : driver?.name?.forename} ${
            driver?.apellido ? driver.nombre : driver?.name?.surname
          }`}
        />
        <DriverInfo>
          <InlineContainer>
            <InfoDoB>{`Nacimiento: ${
              driver?.fechaNacimiento ? driver?.fechaNacimiento : driver.dob
            }`}</InfoDoB>.
            <InfoNationality>
              {driver?.nacionalidad
                ? driver?.nacionalidad
                : driver?.nationality}
            </InfoNationality>
          </InlineContainer>
          <InfoDescription>
            {driver?.descripcion ? driver.descripcion : driver?.description}
          </InfoDescription>
          <TeamsContainer>
            <TeamList>
              <Teams>Escuderías:</Teams>
              {driver?.teams
                ? driver.teams
                : driver?.Team?.map((team) => (
                    <TeamItem key={team.id}>{team.nombre}</TeamItem>
                  ))}
            </TeamList>
          </TeamsContainer>
        </DriverInfo>
      </InfoContainer>
    </>
  );
};

export default Detail;
