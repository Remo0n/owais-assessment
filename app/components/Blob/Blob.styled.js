import styled from "styled-components";

export const BlobDiv = styled.div`
  transform: rotate(90deg);
  opacity: 0.8;
  width: 26rem;
  height: 28rem;
  position: absolute;
  filter: blur(50px);
`;
export const BlobContainer = styled.div``;
export const Wrapper = styled.div`
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.7900000214576721);
  width: 28rem;
  height: 30rem;
  position: absolute;
  left: -20px;
  top: -50px;
`;
export const EllipseOne = styled.div`
  border-radius: 50%;
  background-color: ${(props) => props.EOneColor};
  width: 15rem;
  height: 15rem;
  position: absolute;
  left: 0px;
  top: 6px;
`;
export const EllipseTwo = styled.div`
  border-radius: 50%;
  background-color: ${(props) => props.ETwoColor};
  width: 15rem;
  height: 15rem;
  position: absolute;
  left: 88px;
  top: 182px;
`;
export const EllipseThree = styled.div`
  border-radius: 50%;
  background-color: ${(props) => props.EThreeColor};
  width: 15rem;
  height: 15rem;
  position: absolute;
  left: 150px;
  top: 0px;
`;
