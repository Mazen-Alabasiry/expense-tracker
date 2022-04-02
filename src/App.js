import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import { GlobalProvider } from './context/AppContext';
function App() {
  return (
    <GlobalProvider>
      <div className="App py-2 ">
        <div className='box container bg-white py-2 shadow rounded-top' style={{ width: '400px' }}>
          <Header />
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>

  );
}

export default App;
