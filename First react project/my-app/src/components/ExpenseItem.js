import './ExpenseItem.css';
import Card from './Card'
import ExpenseDate from './ExpenseDate';
import { useState } from 'react';
function ExpenseItem (props){
     const [title, setTitle] = useState(props.title)
     const clickHandler = () =>{
        alert("clicked")
        setTitle("updated")
     }
    return(
       <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'> $ {props.amount} </div>
        </div>
        <button onClick={clickHandler}> change item </button>
       </Card>
    )
}

export default ExpenseItem