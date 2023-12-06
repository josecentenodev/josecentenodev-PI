import styled from "styled-components";

export const Hero = styled.img`
height: 450px;
width: 100%;
object-fit: cover;
filter: grayscale(50%);
`

export const StyledTitle = styled.h1`
  margin: 25px 0 40px;
  text-align: center;
`;

export const StyledSecondTitle = styled.h2`
text-align: center;
margin: 20px 0px;
`

export const InfoContainer = styled.div`
padding: 50px;
display: flex;
justify-content: center;
align-items: baseline;
gap: 50px;
flex-wrap: wrap;
`

export const InfoCardContainer = styled.div`
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      max-width: 300px;
      padding: 20px;
      text-align: center;
      line-height: 25px;
`

export const CardTitle = styled.h2`
text-align: center;
margin: 20px 0px;
`