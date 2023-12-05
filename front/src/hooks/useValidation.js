import { useState } from "react";

const useValidation = () => {
  const [errors, setErrors] = useState({
    nombre: "",
    apellido: "",
    imagen: "",
    nacionalidad: "",
    fechaNacimiento: "",
    descripcion: "",
    teamIds: "",
  });

  const validate = (fieldName, value) => {
    if (errors[fieldName]) {
      setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: "" }));
    }

    if (fieldName === "nombre") {
      let regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{3,20}$/;
      if (!regexNombre.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [fieldName]:
            "El campo debe tener entre 3 y 20 caracteres alfabéticos y espacios.",
        }));
      }
    }

    if (fieldName === "apellido") {
      let regexApellido = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{3,20}$/;
      if (!regexApellido.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [fieldName]:
            "El campo debe tener entre 3 y 20 caracteres alfabéticos y espacios.",
        }));
      }
    }

    if (fieldName === "nacionalidad") {
      let regexNacionalidad = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{3,}$/;
      if (!regexNacionalidad.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [fieldName]: "El campo debe tener al menos 3 caracteres alfabéticos.",
        }));
      }
    }

    if (fieldName === "fechaNacimiento") {
      const fechaNacimiento = new Date(value);
      const fechaActual = new Date();
      if (fechaNacimiento > fechaActual) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [fieldName]:
            "La fecha de nacimiento no puede ser mayor a la fecha actual.",
        }));
      }
    }

    if (fieldName === "descripcion") {
      if (value.length < 10 || value.length > 100) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [fieldName]: "La descripción debe tener entre 10 y 100 caracteres.",
        }));
      }
    }

    if (fieldName === "imagen") {
      const allowedFormats = ["jpg", "jpeg", "png"];
      const fileExtension = value.split(".").pop().toLowerCase();
      if (!allowedFormats.includes(fileExtension)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [fieldName]: "Formato de imagen no válido. Utiliza JPG o PNG.",
        }));
      }
    }
    if (fieldName === "teamIds") {
      if (!Array.isArray(value) || value.length === 0) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [fieldName]: "Selecciona al menos una escudería.",
        }));
      }
    }
  };

  function checkIsFullfilled(object) {
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        const value = object[key];

        if (Array.isArray(value) && value.length === 0) {
          return false;
        }

        if (value === null || value === undefined || value === "") {
          return false;
        }
      }
    }
    return true;
  }

  function checkEmptyFields(object) {
  for (let key in object) {
    if (object.hasOwnProperty(key) && object[key] !== '') {
      return false;
    }
  }
  return true;
}

  return { validate, errors, setErrors, checkIsFullfilled, checkEmptyFields };
};

export default useValidation;
