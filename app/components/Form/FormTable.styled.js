import styled from "styled-components";

export const TableWrapper = styled.div`
  @media (max-width: 768px) {
    overflow: scroll;
  }
`;

export const TableContent = styled.table`
  border-collapse: collapse;
  position: relative;
  z-index: 2;
  width: 100%;
`;

export const Thead = styled.thead`
  tr {
    background-color: #004a91;
    color: #fff;
    text-align: left;
    th {
      padding: 10px 20px;
      font-size: 12px;
      font-weight: 300;
    }
  }
`;

export const Tbody = styled.tbody`
  background: rgba(255, 255, 255, 0.8);
  tr {
    border-bottom: solid 1px #f4f4f5;
    td {
      padding: 10px 20px;
      font-size: 14px;
      color: #004a91;
    }
  }
`;
