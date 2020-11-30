import PropTypes from 'prop-types';
import s from '../TransactionData/TransactionData.module.css';

function TransactionData({ id, type, amount, currency }) {
  return (
    <tr key={id} className={s.element}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

TransactionData.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionData;
