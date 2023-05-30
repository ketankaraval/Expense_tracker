import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "./Card";
import "./expenses.css";
import { useState } from "react";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  // console.log(props.items.filter((a)=>a.date.getFullYear() == filteredYear))

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangedHandler}
      ></ExpenseFilter>
      {props.items.filter((a)=>a.date.getFullYear() == filteredYear).map((expenses) => (
        <ExpenseItem
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      ))}
      <h2>let's get started!</h2>
    </Card>
  );
}
export default Expenses;
