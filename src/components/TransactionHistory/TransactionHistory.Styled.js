import styled from 'styled-components';

export const Table = styled.table`
  background-color: #226688;
  margin: auto;
  width: 360px;
  border-radius: 8px;
  margin-bottom: 40px;
`;

export const Thead = styled.thead`
  background-color: #556633;
  color: white;
  height: 40px;
`;

export const Tbody = styled.tbody`
  text-align: center;
  tr {
    background-color: #559988;
  }
  tr:nth-child(odd) {
    background-color: #337788;
  }
`;

export const Line = styled.tr`
  height: 30px;
  font-size: 14px;
`;

export const Type = styled.td`
  text-transform: capitalize;
`;
