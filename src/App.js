import './App.css';
import React,{useState} from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import TodoList from './Components/TodoList';
const App = () => {
  const [input,setInput]=useState("");
  const [todos,setTodos]=useState([]);
  const [editTodo,setEditTodo] = useState(null);

  return (
    <div className='container'>
      <div className='app-wrapper'>
        <div>
        <Header/>
       </div>
       <div>
       <Form 
       input={input}
       setInput={setInput}
       todos={todos}
       setTodos={setTodos}
       editTodo={editTodo}
       setEditTodo={setEditTodo}
       />
       </div>
       <div>
        <TodoList todos={todos} setTodos={setTodos}
        setEditTodo={setEditTodo}>
        </TodoList>
        
       </div>
      </div>
    </div>


  );
}

export default App;
