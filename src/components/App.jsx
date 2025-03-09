import React,{useState} from "react";

function App() {
  const [todo,settodo]=useState();
  const [todolist,settodolist]=useState([]);
function setChange(event) {
  const newvalue=event.target.value;
  settodo(newvalue);
  
}
function handleClick() {
  settodolist([...todolist,todo]);
  settodo("");
  console.log(todolist);
  
}


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={setChange} value={todo}/>
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
       {todolist.map((item)=><li>{item}</li>)}
          
        </ul>
      </div>
    </div>
  );
}

export default App;
