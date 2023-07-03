import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  const smallTableStyles =
    items && items.length < 5 ? styles['container--small'] : '';

  return (
    <table role="table" className={`${styles.container} ${smallTableStyles}`}>
      <thead>
        <tr className={styles.row}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items && typeof items === 'object'
          ? items.map(el => (
              <tr key={el.id} className={styles.row}>
                <td role="cell">{el.type}</td>
                <td>{el.amount}</td>
                <td>{el.currency}</td>
              </tr>
            ))
          : null}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ).isRequired,
};

export default TransactionHistory;
