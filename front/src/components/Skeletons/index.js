import { SkeletonContainer, SkeletonCard, LoadingP } from "./styles";

export default Skeletons = () => {
    
  return (
    <>
      <LoadingP>Cargando conductores...</LoadingP>
      <SkeletonContainer>
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </SkeletonContainer>
    </>
  );
};
