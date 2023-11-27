import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #393c41;
`;

export const CardWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  min-width: 550px;
  display: flex;
  gap: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const DriverInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px 0 0;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
`;

export const InfoDoB = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #393c41;
  margin-top: 5px;
`;

export const DriverImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 4px 0 0 4px;
`;

export const TeamList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 10px;
`;

export const Teams = styled.p`
  font-weight: 500;
  color: #393c41;
`;

export const TeamItem = styled.li`
  margin: 5px 0;
  font-weight: 300;
  font-size: 12px;
`;

export const TeamsContainer = styled.div``;
