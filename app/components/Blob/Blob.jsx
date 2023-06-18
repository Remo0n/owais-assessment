"use client";
import {
  BlobDiv,
  Wrapper,
  BlobContainer,
  EllipseOne,
  EllipseTwo,
  EllipseThree,
} from "./Blob.styled";
const Blob = ({ EOneColor, ETwoColor, EThreeColor, style }) => {
  return (
    <BlobDiv style={style}>
      <BlobContainer>
        <EllipseOne EOneColor={EOneColor} />
        <EllipseTwo ETwoColor={ETwoColor} />
        <EllipseThree EThreeColor={EThreeColor} />
      </BlobContainer>
      <Wrapper />
    </BlobDiv>
  );
};

export default Blob;
