import { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
// import Card from './components/Card'

function App() {
  const [expenses, setExpense] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  const newExpenseData = (newAddedExpense) => {
    // console.log(newAddedExpense);
    setExpense(prevExpense=>{
      return[newAddedExpense,...prevExpense]
    })
    // expenses.push(newAddedExpense);
    // console.log(expenses);
  };
  return (
    <div>
      <NewExpense onDataAdd={newExpenseData}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
