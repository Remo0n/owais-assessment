import styled from "styled-components";

export const IconWrapper = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  background-color: ${(props) => props.bgColor};
`;
