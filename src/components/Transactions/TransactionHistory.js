import PropTypes from "prop-types";
import cssTransactionHistory from './TransactionHistory.module.css';

const TransactionHistory = ({items}) => {
    console.log({items});
    return (
        <table className={cssTransactionHistory.generalBorder}>
            <thead>
                <tr>
                    <th className={cssTransactionHistory.itemTitle}>Type</th>
                    <th className={cssTransactionHistory.itemTitle}>Amount</th>
                    <th className={cssTransactionHistory.itemTitle}>Currency</th>
                </tr>
            </thead>

        <tbody>
        {items.map(item => {
        return  <tr key={item.id} className={cssTransactionHistory.itemRow}>
                    <td className={cssTransactionHistory.itemRow}>{item.type}</td>
                    <td className={cssTransactionHistory.itemRow}>{item.amount}</td>
                    <td className={cssTransactionHistory.itemRow}>{item.currency}</td>
                </tr>
        })}
        </tbody>
        </table>)
}

TransactionHistory.propTypes = {
    items: PropTypes.array,
  };
    


export default TransactionHistory;


