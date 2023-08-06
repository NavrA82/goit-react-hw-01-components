import PropTypes from 'prop-types';
import {
  Table,
  Tbody,
  Thead,
  Line,
  Type,
  TypeThRight,
  TypeThLeft,
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
            <Type>{type}</Type>
            <td>{amount}</td>
            <td>{currency}</td>
          </Line>
        ))}
      </Tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      currency: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
