// nav.jsx
import React, { useState } from "react";
import SearchInput from "../SearchInput";
import {
  Logo,
  StyledNavBar,
  NavItems,
  NavItem,
  SearchInputContainer,
  MobileIcon,
  NavMenu,
} from "./styles";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledNavBar>
      <Logo>Formula 1</Logo>
      <MobileIcon onClick={toggleMenu}>&#9776;</MobileIcon>
      <NavMenu isOpen={isOpen}>
        <NavItems>
          <NavItem to={"/home"} onClick={toggleMenu}>
            Pilotos
          </NavItem>
          <NavItem to={"/crear"} onClick={toggleMenu}>
            Crear Piloto
          </NavItem>
          <NavItem to={"/info"} onClick={toggleMenu}>
            Info
          </NavItem>
        </NavItems>
        <SearchInputContainer>
          <SearchInput />
        </SearchInputContainer>
      </NavMenu>
    </StyledNavBar>
  );
};

export default NavBar;
