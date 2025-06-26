import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
function Balance()
{
    const {transactions} = useContext(GlobalContext);
    const total = transactions
                .map(transaction => transaction.amount)
                .reduce((acc, item) => (acc+=item), 0)
                .toFixed(2);
    return (
        <>
            <h4>YOUR BALANCE</h4>
            <h1 id="balance"> ${total}</h1>
        </>
    )
}

export default Balance;