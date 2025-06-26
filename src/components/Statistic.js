import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Statistic()
{
    const {transactions} = useContext(GlobalContext);
    const plus = transactions
                .map(a=>a.amount)
                .filter((a)=>a>0)
                .reduce((acc, item) => (acc+=item), 0);
    const minus = transactions
                .map(a=>a.amount)
                .filter((a)=>a<0).
                reduce((acc, item) => (acc-=item), 0);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus"> +${plus}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-minus" className="money minus"> -${minus}</p>
            </div>
        </div>
    );
}

export default Statistic;