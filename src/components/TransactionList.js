import React, { useContext } from 'react'
import { GlobalContext } from '../context/AppContext'
import Transaction from './Transaction'
function TransactionList() {
    const { transaction } = useContext(GlobalContext)
    return (
        <div className='my-3'>
            <h3>History</h3>
            <ul className="list">
                {transaction.map(transaction => <Transaction key={transaction.id} transaction={transaction} />)}
            </ul>
        </div>
    )
}

export default TransactionList