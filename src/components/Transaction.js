import { useContext, useState  } from "react";
import { GlobalContext } from "../context/GlobalState";
function Transaction()
{
    const {addTransaction} = useContext(GlobalContext)
    const [text , setText] = useState("");
    const [amount, setAmount] = useState(0);
    const onSubmit = (e) =>{
        e.preventDefault();

        const newTransaction = {
            id : Math.floor(Math.random()*1000000),
            text : text,
            amount : +amount 
        }
        
        addTransaction(newTransaction)
    }

    return (
        <>
            <h3>Add new transcation</h3>
            <form id="form" onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter-Text..."/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />
                    (negative - expense , positive - income) </label>
                <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value) } placeholder="Enter Amount..."/>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default Transaction;