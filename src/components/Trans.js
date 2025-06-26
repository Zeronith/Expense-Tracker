import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
function Trans({transaction}){

    const {deleteTransaction} = useContext(GlobalContext);
    const sign = (transaction.amount > 0 && "+");
    return (
        <li key={transaction.id} className={(sign=="+")?"plus":"minus"}>
                   {transaction.text} <span>{sign}{transaction.amount}$</span > 
                   <button className="delete-btn" onClick={ () =>{
                        deleteTransaction(transaction.id)
                   }}>x</button>
        </li>
    )
}

export default Trans;