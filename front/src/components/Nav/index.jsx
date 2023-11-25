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
        <NavItem>Pilotos</NavItem>
        <NavItem>Equipos</NavItem>
        <NavItem>Info</NavItem>
      </NavItems>
      <SearchInputContainer>
        <SearchInput />
      </SearchInputContainer>
    </StyledNavBar>
  );
};

export default NavBar;
