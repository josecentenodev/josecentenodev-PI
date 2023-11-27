import React from "react";
import SearchInput from "../SearchInput";
import {
  Logo,
  StyledNavBar,
  NavItems,
  NavItem,
  SearchInputContainer,
} from "./styles";

import { useLocation } from "react-router-dom";

const NavBar = () => {
  let location = useLocation();
  
  return (
    <StyledNavBar>
      <Logo>Formula 1</Logo>
      <NavItems>
        <NavItem to={'/home'}>Pilotos</NavItem>
        <NavItem to={'/teams'}>Equipos</NavItem>
        <NavItem to={'/info'}>Info</NavItem>
      </NavItems>
      <SearchInputContainer>
        <SearchInput />
      </SearchInputContainer>
    </StyledNavBar>
  );
};

export default NavBar;
