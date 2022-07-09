import React,{useContext,useState} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const {addTransaction} = useContext(GlobalContext);

    const [text,setText] = useState()
    const [amount,setAmount] = useState()

    const onSubmit = a => {
      a.preventDefault();

      const newTransaction = {
        id : Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
      }
      addTransaction(newTransaction)
    }

    return (
      <div><h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(t)=>setText(t.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >amount <br />
            (negative - expense, positive - income)
            </label>
          <input type="number" value={amount} onChange={(t)=>setAmount(t.target.value)} placeholder="Enter amount..." />
        </div>
        <button  className="btn">Add transaction</button>
      </form>
      </div>
    )
}
