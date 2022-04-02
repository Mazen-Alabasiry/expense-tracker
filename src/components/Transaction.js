import React, { useContext } from 'react'
import { GlobalContext } from '../context/AppContext'

function Transaction({ transaction }) {
    const sign = Math.sign(transaction.amount) === 1 ? '+' : '-'
    const { deleteTransaction } = useContext(GlobalContext)
    const deleteFunction = () => {
        deleteTransaction(transaction.id)
    }
    function formatToCurrency(money) {
        return (money).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }

    return (
        <div>
            <li className={sign === '+' ? 'plus' : 'minus'}>
                {transaction.text} <span>{sign}${formatToCurrency(Math.abs(transaction.amount))} </span>
                <button className="delete-btn" onClick={deleteFunction}>x</button>
            </li>
        </div>
    )
}

export default Transaction