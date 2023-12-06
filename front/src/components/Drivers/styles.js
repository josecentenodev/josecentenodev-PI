import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  width: 95%;
  margin: 10px auto;
  @media (max-width: 1420px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 970px) {
    grid-template-columns: 1fr;
  }
`;
