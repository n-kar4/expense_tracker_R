import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//Initially 
const initialState = {
    transactions : []
}

// create cntext 
export const GlobalContext = createContext (initialState)

// provider components
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actionssssssssss
    function deleteTransaction(id){
        dispatch({
            type : 'DELETE_TRANSACTION', 
            payload : id
        });
    }
    function addTransaction(transaction){
        dispatch({
            type : 'ADD_TRANSACTION', 
            payload : transaction
        });
    }

    return (<GlobalContext.Provider value={{
        addTransaction,
        deleteTransaction,
        transactions : state.transactions
        }}>
            {children}
        </GlobalContext.Provider>
    )
}