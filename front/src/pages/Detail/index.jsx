import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useSingleDriver from "../../hooks/useSingleDriver";
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
  ButtonsContainer
} from "./styles";
import Button from "../../components/Button";

const Detail = () => {
  let { id } = useParams();
  const { driver } = useSingleDriver(id);
  const navigate = useNavigate()
  const handleEditClick = () => {
    navigate(`/editar/${id}`)
  }
  const handleDeleteClick = () => {
    alert(id)
  }

  return (
    <>
      <InfoTitle>{`${driver?.nombre ? driver.nombre : driver?.name?.forename} ${
        driver?.apellido ? driver?.apellido : driver?.name?.surname
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
            }`}</InfoDoB>
            .
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
                ? driver?.teams
                : driver?.Teams?.map((team) => (
                    <TeamItem key={team.id}>{team.nombre}</TeamItem>
                  ))}
            </TeamList>
          </TeamsContainer>
          {validate(id) && <ButtonsContainer>
            <Button
              title="Editar"
              RightIcon={" 📝"}
              handleClick={handleEditClick}
              isSubmitting={false}
            />
            <Button
              title="Eliminar"
              RightIcon={" 🗑️"}
              handleClick={handleDeleteClick}
              isSubmitting={false}
            />
          </ButtonsContainer>}
          
        </DriverInfo>
      </InfoContainer>
    </>
  );
};

export default Detail;
