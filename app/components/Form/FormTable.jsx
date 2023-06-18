"use client";
import { TableContent, Thead, Tbody, TableWrapper } from "./FormTable.styled";

const FormTable = ({ data, columns }) => {
  return (
    <TableWrapper>
      <TableContent>
        <Thead>
          <tr>
            {columns.map((head) => (
              <th key={head.heaer}>{head.header}</th>
            ))}
          </tr>
        </Thead>
        <Tbody>
          {data &&
            data.map((row) => (
              <tr key={row.id}>
                {columns.map((col) => (
                  <td key={row[col.field]}>{row[col.field]}</td>
                ))}
              </tr>
            ))}
        </Tbody>
      </TableContent>
      {data ? null : <p>No Row to show :)</p>}
    </TableWrapper>
  );
};

export default FormTable;
