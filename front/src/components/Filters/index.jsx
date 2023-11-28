import React, { useState } from "react";
import useTeams from "../../hooks/useTeams";
import useFilters from "../../hooks/useFilters";
import {
  InputWrapper,
  DropdownWrapper,
  Dropbtn,
  DropdownContent,
  StyledLabel,
  PageInput,
  StyledSelect,
  StyledOption,
} from "./styles";

const Filters = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { teams } = useTeams();
  const { includeAPI, includeDB, handleFilter } = useFilters();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownWrapper>
      <Dropbtn onClick={toggleDropdown}>Filtros</Dropbtn>
      <DropdownContent style={{ display: isOpen ? "flex" : "none" }}>
        <InputWrapper>
          <StyledLabel htmlFor="team">Escuderías:</StyledLabel>
          <StyledSelect
            id="team"
            name="team"
            onChange={handleFilter}
          >
            <StyledOption value="DEFAULT">Todas las Escuderías</StyledOption>
            {teams &&
              teams.map((team) => {
                return <StyledOption key={team.id} value={team.nombre}>{team.nombre}</StyledOption>;
              })}
          </StyledSelect>
        </InputWrapper>
        <InputWrapper>
          <StyledLabel htmlFor="namesort">Ordenar por Nombre:</StyledLabel>
          <StyledSelect
            id="namesort"
            onChange={handleFilter}
            name="name"
          >
            <StyledOption value="DEFAULT"></StyledOption>
            <StyledOption value="ASC">Ascendente</StyledOption>
            <StyledOption value="DESC">Descendente</StyledOption>
          </StyledSelect>
        </InputWrapper>
        <InputWrapper>
          <StyledLabel htmlFor="fecsort">Ordenar por Nacimiento:</StyledLabel>
          <StyledSelect
            id="fecsort"
            onChange={handleFilter}
            name="dob"
          >
            <StyledOption value="DEFAULT"></StyledOption>
            <StyledOption value="ASC">Ascendente</StyledOption>
            <StyledOption value="DESC">Descendente</StyledOption>
          </StyledSelect>
        </InputWrapper>
        <InputWrapper>
          <StyledLabel htmlFor="dbCheckbox">Base de Datos</StyledLabel>
          <PageInput
            type="checkbox"
            id="dbCheckbox"
            name="dbOrigin"
            checked={includeDB}
            onChange={handleFilter}
          />
          <StyledLabel htmlFor="apiCheckbox">API</StyledLabel>
          <PageInput
            type="checkbox"
            id="apiCheckbox"
            name="apiOrigin"
            checked={includeAPI}
            onChange={handleFilter}
          />
        </InputWrapper>
      </DropdownContent>
    </DropdownWrapper>
  );
};

export default Filters;
