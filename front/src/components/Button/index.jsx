import React from "react";
import {StyledButton} from './styled'

const Button = ({
  title,
  type,
  isSubmitting,
  handleClick,
  LeftIcon,
  RightIcon,
}) => {
  return (
    // se me ocurre usar isSubmitting para renderizar otro boton que tenga otra apariencia. 
    // pero deberia investigar para ver como seria la mejor manera con styled components
    <StyledButton
      type={type || "button"}
      disabled={isSubmitting}
      onClick={handleClick}
    >
      {LeftIcon && LeftIcon}
      {title}
      {RightIcon && RightIcon}
    </StyledButton>
  );
};

export default Button;
