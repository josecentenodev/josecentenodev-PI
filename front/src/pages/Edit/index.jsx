import React from "react";
import { useParams } from "react-router-dom";
import useSingleDriver from "../../hooks/useSingleDriver";
import Form from "../../components/Form";
import { FormWrapper } from "./styles";

const Editar = () => {
  let { id } = useParams();
  const { driver, loading } = useSingleDriver(id);

  if (loading) {
    // Puedes mostrar un spinner u otra indicación de carga mientras se obtienen los datos
    return <p>Cargando...</p>;
  }

  return (
    <>
      {driver && (
        <FormWrapper>
          <Form
            type="Editar"
            driver={driver}
          />
        </FormWrapper>
      )}
    </>
  );
};

export default Editar;
