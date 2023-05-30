import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const expenseFormDataHandler = (expensedata) => {
    const newData = {
      ...expensedata,
      id: Math.random(),
    };
    console.log(newData);
    props.onDataAdd(newData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveData={expenseFormDataHandler}></ExpenseForm>
    </div>
  );
};
export default NewExpense;
