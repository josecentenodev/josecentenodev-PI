import React, { useState, useEffect } from "react";
import uploadImage from "../../services/uploadImage";
import useTeams from "../../hooks/useTeams";
import useDrivers from "../../hooks/useDrivers";
import Button from "../Button";
import FormImage from "../FormImage";
import { useNavigate } from "react-router-dom";
import useValidation from "../../hooks/useValidation";
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
  const { validate, errors, setErrors, checkIsFullfilled, checkEmptyFields } = useValidation();

  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const isFormFullfilled = checkIsFullfilled(form)
    console.log('talleno: ', isFormFullfilled)

    const isErrorsEmpty = checkEmptyFields(errors)
    console.log('tavacio: ', isErrorsEmpty)

    if(isFormFullfilled && isErrorsEmpty) {
      setIsDisabled(false)
    }

  }, [form, errors, setErrors, isDisabled, setIsDisabled]);

  const handleInputChange = (fieldName, value) => {
    setForm((prevForm) => ({ ...prevForm, [fieldName]: value }));
    validate(fieldName, value);
    if (!value.length && fieldName !== 'teamIds') {
      setErrors({
        ...errors,
        [fieldName]: "",
      });
    }
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
      handleInputChange("imagen", "errorDeFormato.error");
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

  const confirmEdit = () => {
    const isConfirmed = window.confirm("¿Estás seguro que deseas editar?");
    if (isConfirmed) {
      updateDriver(form, driver?.id);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    setIsDisabled(true);
    try {
      type === "Crear"
        ? createDriver(form)
        : type === "Editar"
        ? confirmEdit()
        : alert("Formulario no reconocido");
    } catch (error) {
      console.log("trycatchform", error);
      alert(
        `Algo falló al ${
          type === "Crear" ? "crear" : "editar"
        } el Piloto. Intenta de nuevo!`
      );
    } finally {
      if (type === "Crear") {
        alert("Conductor creado correctamente");
        navigate("/home");
      }

      if (type === "Editar") {
        alert("Conductor actualizado correctamente");
        navigate("/home");
      }
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
            name="nombre"
            value={form.nombre}
            onChange={(e) => handleInputChange("nombre", e.target.value)}
          />
          {errors.nombre && (
            <span style={{ color: "red" }}>{errors.nombre}</span>
          )}
        </InputWrapper>
        <InputWrapper>
          <StyledLabel>Apellido</StyledLabel>
          <StyledInput
            type="text"
            name="apellido"
            value={form.apellido}
            onChange={(e) => handleInputChange("apellido", e.target.value)}
          />
          {errors.apellido && (
            <span style={{ color: "red" }}>{errors.apellido}</span>
          )}
        </InputWrapper>
        <InputWrapper>
          <StyledLabel>Imagen</StyledLabel>
          <input
            id="image"
            type="file"
            name="imagen"
            accept="image/*"
            required={type === "Crear" ? true : false}
            onChange={(e) => handleChangeImage(e)}
          />
          {form.imagen && <FormImage src={form.imagen} />}
          {errors.imagen && (
            <span style={{ color: "red" }}>{errors.imagen}</span>
          )}
        </InputWrapper>
        <InputWrapper>
          <StyledLabel>Nacionalidad</StyledLabel>
          <StyledInput
            type="text"
            name="nacionalidad"
            value={form.nacionalidad}
            onChange={(e) => handleInputChange("nacionalidad", e.target.value)}
          />
          {errors.nacionalidad && (
            <span style={{ color: "red" }}>{errors.nacionalidad}</span>
          )}
        </InputWrapper>
        <InputWrapper>
          <StyledLabel>Fecha de Nacimiento</StyledLabel>
          <StyledInput
            type="date"
            name="fechaNacimiento"
            value={form.fechaNacimiento}
            onChange={(e) =>
              handleInputChange("fechaNacimiento", e.target.value)
            }
          />
          {errors.fechaNacimiento && (
            <span style={{ color: "red" }}>{errors.fechaNacimiento}</span>
          )}
        </InputWrapper>
        <InputWrapper>
          <StyledLabel>Descripcion</StyledLabel>
          <StyledTextArea
            type="text"
            name="descripcion"
            value={form.descripcion}
            onChange={(e) => handleInputChange("descripcion", e.target.value)}
          />
          {errors.descripcion && (
            <span style={{ color: "red" }}>{errors.descripcion}</span>
          )}
        </InputWrapper>
        <InputWrapper>
          <StyledLabel>Escuderias</StyledLabel>
          <StyledInput
            as="select"
            name="teamIds"
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
          {errors.teamIds && (
            <span style={{ color: "red" }}>{errors.teamIds}</span>
          )}
        </InputWrapper>
        <Button
          title={
            isDisabled
              ? `${type === "Crear" ? "Crear..." : "Editar..."}`
              : `${type === "Crear" ? "Crear" : "Editar"}`
          }
          type="submit"
          RightIcon={isDisabled ? "" : "🚘"}
          isDisabled={isDisabled}
        />
      </StyledForm>
    </>
  );
};

export default Form;
