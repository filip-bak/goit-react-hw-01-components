import React from 'react';
import PropTypes from 'prop-types';
import './TransactionHistory.css';

const TransactionHistory = ({ items }) => {
  const smallTableStyles =
    items && items.length < 5 ? 'transaction-history--small' : '';

  return (
    <table role="table" className={`transaction-history ${smallTableStyles}`}>
      <thead>
        <tr className="transaction-history__row">
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items && typeof items === 'object'
          ? items.map(el => (
              <tr key={el.id} className="transaction-history__row">
                <td role="cell" align="left">
                  {el.type}
                </td>
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
