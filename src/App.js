import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [todos,setTodos]=useState([]) 
  const [todo,setTodo]=useState([''])
  const [editext,seteditext]=useState([""])
  const deletetask=(id)=>{
    setTodos(todos.filter((task)=> task.ID !== id));
  }
  const editask=(text)=>{ 
    seteditext(text)

  }
  
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodos([...todos,{ID:Date.now() ,text:todo ,status:false}])} className="fas fa-plus"></i>
      </div>

      <div className="todos">
        { todos.map((obj)=>{
          return(
        <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              console.log(e.target.checked)
              console.log(obj)
              setTodos(todos.filter(obj2=>{
                if(obj2.ID===obj.ID){
                  obj2.status=e.target.checked
                }
                return obj2
              }))
            }} value={obj.status}type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>


          
          <div className="right" onClick={() => deletetask(obj.ID)}>
            <i className="fas fa-times"></i>
          </div>
        </div>)
        })} 
        {todos.map((obj)=>{
          if(obj.status){
            return(<h1>{obj.text}</h1>)
          }
          return null
        }

  )}
      </div>
    </div>
  );
}

export default App;

// import React,{useState} from 'react';

// function App() {
//   const [count,setCount]=useState(0)  
//   const addcount=()=>{
    
//     setCount(count+1)

//   }  
//   return (
   
//     <div className="app">
//       <button onClick={addcount}>count</button>
//       <h1>counter:{count}</h1>
//     </div>
//   );
// }

// export default App;
