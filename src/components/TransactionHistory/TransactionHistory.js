import PropTypes from 'prop-types';

import {
  Table,
  Tbody,
  Thead,
  Line,
  TypeTdOne,
  TypeThRight,
  TypeThLeft,
  TypeTdTwoThree,
} from './TransactionHistory.Styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Thead>
        <tr>
          <TypeThLeft>Type</TypeThLeft>
          <th>Amount</th>
          <TypeThRight>Currency</TypeThRight>
        </tr>
      </Thead>

      <Tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Line key={id}>
            <TypeTdOne>{type}</TypeTdOne>
            <TypeTdTwoThree>{amount}</TypeTdTwoThree>
            <TypeTdTwoThree>{currency}</TypeTdTwoThree>
          </Line>
        ))}
      </Tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
