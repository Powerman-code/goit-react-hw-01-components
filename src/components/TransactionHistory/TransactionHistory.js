import PropTypes from 'prop-types';
import TransactionData from '../TransactionData/TransactionData';
import s from '../TransactionHistory/TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={s.table}>
      <thead className={s.head}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={s.body}>
        {items.map(TransactionData)}
        {/* {items.map(item => (
          <TransactionData {...item} />
        ))} */}
        {/* <tr key = {id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr> */}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;
