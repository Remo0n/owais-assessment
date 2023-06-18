import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  z-index: 2;
  padding: 30px 20px;
`;
export const Badge = styled.div`
  background-color: #004a91;
  color: #fff;
  font-size: 13px;
  padding: 8px 12px;
  border-radius: 5px;
  margin-right: 10px;
`;
export const Switcher = styled.div`
  background-color: #2a2522;
  color: #fff;
  font-size: 10px;
  border-radius: 5px;
  margin-right: 10px;
  width: 65px;
  display: flex;
  justify-content: space-between;
  padding: 4px;
  span {
    padding: 8px 10px;
  }
  span:first-child {
    background-color: #dcac00;
    border-radius: 5px;
  }
`;
export const UserMenu = styled.div`
  display: flex;
  align-items: center;
  border: solid 1px #ccc;
  border-radius: 5px;
  padding: 8px 15px;
  color: #64646c;
`;
export const UserImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 5px;
  color: #fff;
  background-color: #004a91;
  margin-right: 10px;
`;
export const TitleDiv = styled.div`
  display: flex;
`;
