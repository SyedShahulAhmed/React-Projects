import React ,{ createContext, useReducer } from "react";
import AppReducer from './AppReducer'
const IntialState =  {
    transactions: [
    {
        id: "1",
        text: "Grocery Shopping",
        amount: -50.00
    },
    {
        id: "2",
        text: "Salary Credit",
        amount: 3000.00
    },
    {
        id: "3",
        text: "Utility Bill Payment",
        amount: -120.75
    },
    {
        id: "4",
        text: "Freelance Payment",
        amount: 450.00
    },
    {
        id: "5",
        text: "Dining Out",
        amount: -75.30
    }
]
}

//Create Context

export const GlobalContext = createContext(IntialState)

//Provider

export const GlobalProvider = ({children})=>{
    const [state,dispatch] = useReducer(AppReducer,IntialState)

    //Action
    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload: id
        })
    }
    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload: transaction
        })
    }


    return (<GlobalContext.Provider value={{transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}