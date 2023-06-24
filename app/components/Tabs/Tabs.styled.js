import styled from "styled-components";

export const TabsWrapper = styled.div`
  display: flex;
  position: relative;
  z-index: 2;
  margin: 0.6rem 0;
`;

export const TabsHeader = styled.ul`
  list-style-type: none;
  min-width: 14.5rem;
  margin-inline-end: 1.5rem;
`;

export const TabTitleLi = styled.li`
  color: ${(props) => (props.isActive ? "#ffffff" : "#004A91")};
  background-color: ${(props) => (props.isActive ? "#004A91" : "#ffffff")};
  font-weight: ${(props) => (props.isActive ? "600" : "400")};
  padding: 0.625rem 3.34375rem 0.625rem 1.25rem;
  margin: 0.2rem 0;
  cursor: pointer;
  font-size: 0.9375rem;
  display: flex;
  align-items: center;

  span {
    margin-inline-end: 0.6rem;
  }
`;

export const ChildrenWrapper = styled.div`
  width: 100%;
`;
