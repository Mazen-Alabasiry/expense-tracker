import React, { useContext } from 'react'
import { GlobalContext } from '../context/AppContext'

function IncomeExpenses() {
    const { transaction } = useContext(GlobalContext);
    let Income = 0,
        Expense = 0;
    transaction.forEach(element => {
        const sign = Math.sign(element.amount) === 1 ? '+' : '-'
        sign === '+' ? Income += +(element.amount) : Expense += +(-1 * element.amount)

    });
    console.log(Income, Expense)
    function formatToCurrency(money) {
        return (money).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
    return (
        <div className='inc-exp-container d-flex justify-content-between bg-white py-3 px-1 rounded '>
            <div>
                <h4>Income</h4>
                <p className='money plus' >${formatToCurrency(Income)}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className='money minus' >${formatToCurrency(Expense)}</p>
            </div>
        </div>
    )
}

export default IncomeExpenses