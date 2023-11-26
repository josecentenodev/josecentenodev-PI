import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavBar = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
padding: 32px;
background-color: #fff;
color: #393c41;
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
`;

export const SearchInputContainer = styled.div`
margin-left: auto;
`;