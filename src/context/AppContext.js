import React, { useReducer, createContext } from 'react'
const initState = {
    transaction: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
}
const DELETE = 'DELETE-TRANSACTION'
const ADD = 'ADD-TRANSACTION'
export const Reducer = (state, action) => {
    switch (action.type) {
        case DELETE: {
            return { transaction: state.transaction.filter(trans => trans.id !== action.payload.id) }
        }
        case ADD: {
            const id = (state.transaction.length) + 1
            return { transaction: [...state.transaction, { id: id, text: action.payload.text, amount: action.payload.amount }] }
        }

        default:
            return state
    }
}

export const GlobalContext = createContext(initState);

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(Reducer, initState);

    function deleteTransaction(id) {
        dispatch({ type: DELETE, payload: { id } })
    }
    function addTransaction(text, amount) {
        dispatch({ type: ADD, payload: { text, amount } })
    }
    return (<GlobalContext.Provider value={{
        transaction: state.transaction,
        deleteTransaction,
        addTransaction,
    }}>
        {children}
    </GlobalContext.Provider>)
}

//Actions Functions

