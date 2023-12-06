// styles.js
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
  background-color: #fff;
  color: #393c41;

  @media screen and (max-width: 970px) {
    margin-bottom: 50px;
  }
`;

export const Logo = styled.h1`
  font-size: 24px;
  margin: 0;
`;

export const NavItems = styled.div`
  display: flex;
  margin-left: 24px;
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  color: #393c41;
  margin-right: 12px;
  cursor: pointer;
  transition: background-color ease 0.3s;
  padding: 4px 8px;
  border-radius: 4px;
  min-width: 100px;
  text-align: center;
  font-weight: 500;

  &:hover {
    background-color: #f2f2f2;
  }

  @media screen and (max-width: 600px) {
    /* Nuevo estilo para el nuevo breakpoint */
    margin-right: 0;
    margin-bottom: 8px;
  }
`;

export const SearchInputContainer = styled.div`
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 970px) {
    display: block;
    font-size: 1.5rem;
    cursor: pointer;
    color: #393c41;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 970px) {
    position: absolute;
    top: 80px;
    left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    width: 100%;
    background-color: #fff;
    transition: left 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 5px 0;
  }

  @media screen and (max-width: 600px) {
    /* Nuevo estilo para el nuevo breakpoint */
    flex-direction: column;
    gap: 10px;
  }
`;
