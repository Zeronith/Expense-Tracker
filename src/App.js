import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import Statistic from './components/Statistic';
import History from './components/History';
import Transaction from './components/Transaction';
import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
        <Header title="Expense Tracker"/>
        <div className="container">
            <Balance/>
            <Statistic/>
            <History/>
            <Transaction/>
        </div>
    </GlobalProvider>
  );
}

export default App;
