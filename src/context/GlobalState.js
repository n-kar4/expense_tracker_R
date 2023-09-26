import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

//Initially 
const initialState = {
    transactions : [],
    error: null,
    loading: true
}

// create cntext 
export const GlobalContext = createContext (initialState)

// provider components
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actionssssssssss
    async function getTransactions(){
        try{
            const res=await axios.get("/api/v1/transactions");

            dispatch({
                type: "GET_TRANSaYYYY",
                payload: res.data.data
            });
        }catch(err){
            dispatch({
                type: "TRANSaYYYY_ERROR",
                payload: err.response.data.error
            });
        }
    }
    
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
        getTransactions,
        error: state.error,
        loading: state.loading,
        addTransaction,
        deleteTransaction,
        transactions : state.transactions
        }}>
            {children}
        </GlobalContext.Provider>
    )
}