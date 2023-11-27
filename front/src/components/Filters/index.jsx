import React, { useState } from "react";
import {
  InputWrapper,
  DropdownWrapper,
  Dropbtn,
  DropdownContent,
} from "./styles";

const Filters = ({
  includeDB,
  includeAPI,
  handleTeam,
  handleSort,
  handleOrigin,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownWrapper>
      <Dropbtn onClick={toggleDropdown}>Filtros</Dropbtn>
      <DropdownContent style={{ display: isOpen ? "flex" : "none" }}>
        <InputWrapper>
          <label htmlFor="team">Escuderías:</label>
          <select
            id="team"
            onChange={handleTeam}
          >
            <option value="">Todas las Escuderías</option>
            {/* Agregar opciones de teams dinámicamente si es necesario */}
          </select>
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="sort">Ordenar por Nombre:</label>
          <select
            id="sort"
            onChange={handleSort}
          >
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="sort">Ordenar por Apellido:</label>
          <select
            id="sort"
            onChange={handleSort}
          >
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="dbCheckbox">Base de Datos</label>
          <input
            type="checkbox"
            id="dbCheckbox"
            checked={includeDB}
            onChange={handleOrigin}
          />
          <label htmlFor="apiCheckbox">API</label>
          <input
            type="checkbox"
            id="apiCheckbox"
            checked={includeAPI}
            onChange={handleOrigin}
          />
        </InputWrapper>
      </DropdownContent>
    </DropdownWrapper>
  );
};

export default Filters;
