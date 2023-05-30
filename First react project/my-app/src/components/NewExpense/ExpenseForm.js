import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const inputTitleHandler = (event) => {
    console.log(event.target.value);
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, title: event.target.value };
    });
  };
  const inputAmountHandler = (event) => {
    console.log(event.target.value);
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, amount: event.target.value };
    });
  };
  const inputDateHandler = (event) => {
    console.log(event.target.value);
    setUserInput((prevUserInput) => {
        // date =event.target.value
      return { ...prevUserInput, date: new Date(event.target.value) };
    });
  };
  const checkData = (event) => {
    event.preventDefault();
    console.log(userInput);
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, title: "", amount: "", date: "" };
    });
    props.onSaveData(userInput);
  };
  return (
    <form onSubmit={checkData}>
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.title}
            onChange={inputTitleHandler}
          />
        </div>
        <div className="new-expense_control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.amount}
            onChange={inputAmountHandler}
          />
        </div>
        <div className="new-expense_control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.date}
            onChange={inputDateHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
