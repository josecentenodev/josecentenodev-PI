import styled from 'styled-components';


export const SkeletonContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
justify-items: center;
width: 95%;
margin: 10px auto;`

export const SkeletonCard = styled.div`
border: 1px solid #ddd;
  border-radius: 8px;
  margin: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 550px;
  height: 290px;
  display: flex;
  gap: 10px;
  transition: transform 0.3s ease;
`

export const LoadingP = styled.p`
text-align: center;
color: #393c41;
margin-top: 20px;
`