import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'

export const TransactionHistory = ({ items }) => {
  return (
       
    <table className={css.transactionHistory}>
       
      <thead className={css.tableHeader}>
        <tr>
          <th className={css.thead}>Type</th>
          <th className={css.thead}>Amount</th>
          <th className={css.thead}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((items, index) => (
          <tr key={items.id} className={index % 2 === 0 ? css.tableRowOdd : css.tableRowEven}>
            <td className={css.tableData}>{items.type}</td>
            <td className={css.tableData}>{items.amount}</td>
            <td className={css.tableData}>{items.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired
};