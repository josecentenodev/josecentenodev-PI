import { useState, useEffect } from "react";

const useValidation = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [errors, setErrors] = useState({nombre: '', apellido: '', imagen: '', nacionalidad: '', fechaNacimiento: '', descripcion: '', teamsIds: '' });

  const validate = (fieldName, value) => {
    if (errors[fieldName]) {
      setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: "" }));
    }

    if (fieldName === "nombre") {
      let regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{3,12}$/;
      if (!regexNombre.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [fieldName]:
            "El campo debe tener entre 3 y 12 caracteres alfabéticos y espacios.",
        }));
      }
    }

    if (fieldName === "apellido") {
      let regexApellido = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{3,12}$/;
      if (!regexApellido.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [fieldName]:
            "El campo debe tener entre 3 y 12 caracteres alfabéticos y espacios.",
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
      // Agregar validación para la fecha de nacimiento si es necesario
      // Ejemplo: la fecha no puede ser mayor a la fecha actual, etc.
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
      // Agregar validación para la descripción si es necesario
      // Ejemplo: longitud mínima o máxima, caracteres permitidos, etc.
      if (value.length < 10 || value.length > 100) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [fieldName]: "La descripción debe tener entre 10 y 100 caracteres.",
        }));

      }
    }

    if (fieldName === "imagen") {
      // Agregar validación para la imagen si es necesario
      // Ejemplo: formato de archivo permitido, tamaño máximo, etc.
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
      // Agregar validación para el array de teamIds si es necesario
      // Ejemplo: longitud mínima, elementos únicos, etc.
      if (!Array.isArray(value) || value.length === 0) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [fieldName]: "Selecciona al menos una escudería.",
        }));
      }
    }
  };

  useEffect(() => {
    // Verificar si hay algún error en los campos
    const hasErrors = Object.values(errors).some((error) => error !== '');
    console.log(Object.values(errors).some((error) => error !== ''))
    // Actualizar el estado isDisabled
    setIsDisabled(hasErrors);
  }, [errors]);
  

  return { validate, errors, isDisabled, setIsDisabled };
};

export default useValidation;
