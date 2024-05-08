import React, { useState } from 'react';
import '../styles/faq.css'

const Project = () => {
  const [todolist, setTodolist] = useState([]);
  let saveToDoList = (event) => {
    let todoname = event.target.todoname.value;
    if (!todolist.includes(todoname)) {
      let finaltodolist = [...todolist,todoname];
      setTodolist(finaltodolist)
  } else {
    alert("todo name alrady existes")
  }
    event.preventDefault()
  };

  let list = todolist.map((value,index) => {
    return(
      <TodoListItems value={value} key={index} indexNumber={index} 
      todolist={todolist}
      setTodolist={setTodolist}
      />
    )
  }
);

  return (
    <>
    <div className='todoouter'>
    <h1>todo list</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name='todoname'/>
        <button>add</button>
      </form>
      <div className='outerlist'> 
        <ul>
        {list }
        </ul>
      </div>
    </div>
    </>
  );
};

export default Project;


const TodoListItems = ({value,indexNumber,todolist,setTodolist}) => {
  const [status,setStatus] = useState(false);
  let deleteRow = () => {
    let finalList = todolist.filter((v,i) => i != indexNumber)
    setTodolist(finalList)
  }
let checkStatus = () => {
 setStatus(!status)
};
  return(
    <li className={status ? "underlineTodolist" : ""} onClick={checkStatus} > {indexNumber+1}{". "} {value} <span onClick={deleteRow}>&times;</span></li> 
  );
};
