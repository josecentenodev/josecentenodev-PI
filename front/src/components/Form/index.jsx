import React, { useState } from "react";
import uploadImage from "../../services/uploadImage";
import useTeams from "../../hooks/useTeams";
import useDrivers from "../../hooks/useDrivers";
import Button from "../Button";
import FormImage from "../FormImage";
import { useNavigate } from "react-router-dom";
import {
  StyledTitle,
  StyledForm,
  InputWrapper,
  StyledLabel,
  StyledInput,
  StyledTextArea,
} from "./styles";

const Form = ({ type, driver }) => {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const { createDriver, updateDriver } = useDrivers();
  const { teams } = useTeams();
  const [form, setForm] = useState({
    nombre: driver?.nombre || "",
    apellido: driver?.apellido || "",
    imagen: driver?.imagen || "",
    nacionalidad: driver?.nacionalidad || "",
    fechaNacimiento: driver?.fechaNacimiento || "",
    descripcion: driver?.descripcion || "",
    teamIds: driver?.Teams || [],
  });

  const handleInputChange = (fieldName, value) => {
    setForm((prevForm) => ({ ...prevForm, [fieldName]: value }));
  };

  const handleTeamChange = (e) => {
    const selectedTeams = Array.from(e.target.selectedOptions, (option) =>
      Number(option.value)
    );
    handleInputChange("teamIds", selectedTeams);
  };

  const handleChangeImage = async (e) => {
    e.preventDefault();

    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.includes("image")) {
      alert("Please upload an image!");

      return;
    }
    const formData = new FormData();
    formData.append("image", file);
    try {
      const { imageUrl } = await uploadImage(formData);
      handleInputChange("imagen", imageUrl);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    setSubmitting(true);
    try {
      type === "Crear"
        ? createDriver(form)
        : type === "Editar"
        ? updateDriver(form, driver?.id)
        : alert("Formulario no reconocido");
    } catch (error) {
      console.log("trycatchform", error);
      alert(
        `Algo falló al ${
          type === "Crear" ? "crear" : "editar"
        } el Piloto. Intenta de nuevo!`
      );
    } finally {
      setSubmitting(false);
      alert("Usuario creado correctamente");
      navigate("/home");
    }
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
            onChange={(e) => handleChangeImage(e)}
          />
          {form.imagen && <FormImage src={form.imagen}/>}
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
          <StyledTextArea
            type="text"
            value={form.descripcion}
            onChange={(e) => handleInputChange("descripcion", e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <StyledLabel>Escuderias</StyledLabel>
          <StyledInput
            as="select"
            multiple
            value={form.teamIds}
            onChange={handleTeamChange}
          >
            {/* Renderizar opciones de escuderías aquí */}
            {teams.map((team) => (
              <option
                key={team.id}
                value={team.id}
              >
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
