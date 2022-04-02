import React, { useContext } from 'react'
import { GlobalContext } from '../context/AppContext'
function Balance() {
    function formatToCurrency(money) {
        return (money).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
    const { transaction } = useContext(GlobalContext);
    let total = 0
    transaction.forEach(element => {
        total += +(element.amount)
    });
    return (
        <div className='d-flex justify-content-around  align-items-center text-start my-3'>
            <h4 className='text-muted'>Your Balance</h4>
            <h1 ><span className='fst-italic me-1 text-success opacity-75'>$</span>{formatToCurrency(total)}</h1>
        </div>
    )
}

export default Balance