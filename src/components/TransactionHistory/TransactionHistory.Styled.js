import styled from 'styled-components';

export const Table = styled.table`
  background-color: #226688;
  margin: auto;
  width: 360px;
  border-radius: 8px;
  margin-bottom: 40px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
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
  tr:last-of-type td:first-child {
    border-bottom-left-radius: 8px;
  }
  tr:last-of-type td:last-child {
    border-bottom-right-radius: 8px;
  }
`;

export const Line = styled.tr`
  height: 32px;
`;

export const TypeTdOne = styled.td`
  text-transform: capitalize;
  &:hover {
    background-color: #66aabb;
    cursor: 'pointer';
  }
`;
export const TypeTdTwoThree = styled.td`
  &:hover {
    background-color: #66aabb;
    cursor: 'pointer';
  }
`;

export const TypeThRight = styled.th`
  border-top-right-radius: 8px;
`;

export const TypeThLeft = styled.th`
  border-top-left-radius: 8px;
`;
