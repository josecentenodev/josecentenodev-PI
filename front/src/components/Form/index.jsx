import React, { useState } from "react";
import useTeams from "../../hooks/useTeams";
import Button from "../Button";
import {
  StyledTitle,
  StyledForm,
  InputWrapper,
  StyledLabel,
  StyledInput,
  StyledTextArea
} from "./styles";

const Form = ({ type, driver }) => {
  const [submitting, setSubmitting] = useState(false);
  const { teams } = useTeams();
  const [form, setForm] = useState({
    nombre: driver?.nombre || "",
    apellido: driver?.apellido || "",
    imagen: driver?.imagen || "",
    nacionalidad: driver?.nacionalidad || "",
    fechaNacimiento: driver?.fechaNacimiento || "",
    descripcion: driver?.descripcion || "",
    escuderias: driver?.escuderias || [],
  });
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(form)
  };

  const handleInputChange = (fieldName, value) => {
    setForm((prevForm) => ({ ...prevForm, [fieldName]: value }));
  };

  const handleTeamChange = (e) => {
    const selectedTeams = Array.from(e.target.selectedOptions, (option) => option.value);
    handleInputChange("escuderias", selectedTeams);
  };

  return (
    <>
      <StyledForm onSubmit={handleFormSubmit}>
        <StyledTitle>{type} Piloto</StyledTitle>
        <InputWrapper>
          <StyledLabel>Nombre</StyledLabel>
          <StyledInput
            type="text"
            value={form.nombre}
            onChange={(e) => handleInputChange("nombre", e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <StyledLabel>Apellido</StyledLabel>
          <StyledInput
            type="text"
            value={form.apellido}
            onChange={(e) => handleInputChange("apellido", e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <StyledLabel>Imagen</StyledLabel>
          <input
            id="image"
            type="file"
            accept="image/*"
            required={type === "Crear" ? true : false}
          />
        </InputWrapper>
        <InputWrapper>
          <StyledLabel>Nacionalidad</StyledLabel>
          <StyledInput
            type="text"
            value={form.nacionalidad}
            onChange={(e) => handleInputChange("nacionalidad", e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <StyledLabel>Fecha de Nacimiento</StyledLabel>
          <StyledInput
            type="date"
            value={form.fechaNacimiento}
            onChange={(e) =>
              handleInputChange("fechaNacimiento", e.target.value)
            }
          />
        </InputWrapper>
        <InputWrapper>
          <StyledLabel>Descripcion</StyledLabel>
          <StyledTextArea type="text"
            value={form.descripcion}
            onChange={(e) => handleInputChange("descripcion", e.target.value)}/>
        </InputWrapper>
        <InputWrapper>
        <StyledLabel>Escuderias</StyledLabel>
        <StyledInput as="select" multiple value={form.escuderias} onChange={handleTeamChange}>
          {/* Renderizar opciones de escuderías aquí */}
          {teams.map((team) => (
            <option key={team.id} value={team.id}>
              {team.nombre}
            </option>
          ))}
        </StyledInput>
      </InputWrapper>
        <Button
          title={
            submitting
              ? `${type === "Crear" ? "Creando" : "Editando"}`
              : `${type === "Crear" ? "Crear" : "Editar"}`
          }
          type="submit"
          RightIcon={submitting ? "" : "🚘"}
          isSubmitting={submitting}
        />
      </StyledForm>
    </>
  );
};

export default Form;
