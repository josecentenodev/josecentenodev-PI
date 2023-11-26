import React from "react";
import { v4 as uuidv4 } from "uuid";
import Driver from "../Driver";
import { GridContainer } from "./styles";


const Drivers = ({drivers}) => {


  return (
    <GridContainer>
      {drivers.map((driver) => (
        <Driver
          id={driver.id}
          key={uuidv4()}
          nombre={driver.nombre || driver.name.forename}
          apellido={driver.apellido || driver.name.surname}
          imagen={driver.imagen || driver.image.url}
          teams={
            driver.Teams
              ? driver.Teams
              : driver.teams
              ? driver.teams
              : "Sin escuderías"
          }
          fechaNacimiento={driver.fechaNacimiento || driver.dob}
        />
      ))}
    </GridContainer>
  );
};

export default Drivers;
