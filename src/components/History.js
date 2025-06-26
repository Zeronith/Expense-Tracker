import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
import Trans from "./Trans"

function History()
{
    const {transactions} = useContext(GlobalContext);
    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map(transaction => (<Trans key={transaction.id} transaction={transaction}/>))}
            </ul>   
        </>
    )
}

export default History;