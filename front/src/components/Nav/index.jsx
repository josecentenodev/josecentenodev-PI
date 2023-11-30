import React from "react";
import SearchInput from "../SearchInput";
import {
  Logo,
  StyledNavBar,
  NavItems,
  NavItem,
  SearchInputContainer,
} from "./styles";


const NavBar = () => {

  return (
    <StyledNavBar>
      <Logo>Formula 1</Logo>
      <NavItems>
        <NavItem to={"/home"}>Pilotos</NavItem>
        <NavItem to={"/crear"}>Crear Piloto</NavItem>
        <NavItem to={"/info"}>Info</NavItem>
      </NavItems>
      <SearchInputContainer>
        <SearchInput />
      </SearchInputContainer>
    </StyledNavBar>
  );
};

export default NavBar;
