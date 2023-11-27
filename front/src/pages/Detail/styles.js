import styled from "styled-components";

export const InfoTitle = styled.h1`
  font-size: 44px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 20px;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 80%;
  gap: 20px;
  margin: 0 auto;
`;

export const DriverImage = styled.img`
  max-height: 650px;
`;

export const TeamList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 10px;
  color: #393c41;
`;

export const Teams = styled.p`
  font-weight: 500;
  color: #393c41;
  margin-bottom: 5px;
`;

export const TeamItem = styled.li`
  margin: 5px 0;
  font-weight: 300;
  font-size: 12px;
  color: #393c41;
`;

export const TeamsContainer = styled.div``;

export const DriverInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px 0 0;
`;

export const InfoDoB = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #393c41;
  margin-top: 5px;
  display: inline;
`;

export const InfoNationality = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #393c41;
  margin-top: 5px;
  display: inline;
`;

export const InlineContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const InfoDescription = styled.p`
  padding: 10px 0;
  color: #393c41;
  font-size: 18px;
  width: 500px;
`;
