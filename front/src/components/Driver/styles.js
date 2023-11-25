import styled from "styled-components";

export const CardWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  min-width: 500px;
  display: flex;
  gap: 20px;
`;

export const DriverInfo = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`

export const InfoContainer = styled.div`
display: flex;
flex-direction: column;
gap: 10px;`;

export const InfoTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
`;

export const InfoDoB = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #393c41;
`;

export const DriverImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 4px;
`;

export const TeamList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Teams = styled.p`
  font-weight: 500;
  color: #393c41;`

export const TeamItem = styled.li`
  margin-bottom: 8px;
  font-weight: 300;
`;

export const TeamsContainer = styled.div`
`