import styled from "styled-components";

export const HeaderDiv = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.5);
  min-height: 105px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  padding: 0px 15px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;
export const HeaderBio = styled.div`
  display: flex;
  flex-direction: row;
`;
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  background-color: #004a91;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 10px;
`;
export const Title = styled.h4`
  color: #004a91;
`;
export const SubTitle = styled.p`
  color: #004a91;
  opacity: 0.8;
  font-size: 14px;
`;
export const Search = styled.input`
  padding: 8px 15px;
  margin-right: 10px;
  border: solid 1px #b7b7ba;
  width: 230px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #004a91;
  }
  :-ms-input-placeholder {
    color: #004a91;
  }
`;
export const FilterDiv = styled.div`
  position: relative;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;
export const SortSelect = styled.select`
  padding: 8px 6px;
  border: solid 1px #b7b7ba;
  color: #004a91;
  option[value=""][disabled] {
    display: none;
  }
`;
