import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './components/sections/header';
import Balance from './components/sections/Balance';
import AddTransaction from './components/sections/AddTransaction';
import Filter from './components/sections/Filter';
import TransactionList from './components/sections/TransactionList';

function App() {
  return (
    <div className="flex flex-col h-screen w-screen items-center  p-4 bg-[#f7f7f7]">
      <div className="flex flex-col items-center justify-center   max-w-4xl min-w-2xl border rounded-2xl bg-white p-4">
        <Header />
        <Balance />
        <AddTransaction />
        <Filter />
        <TransactionList />
      </div>
    </div>
  );
}

export default App;
