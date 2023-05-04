import React, { useState } from 'react';
import style from './App.module.css';
import List from './components/List';


const App: React.FunctionComponent = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    setTodo(e.target.value);
    console.log(todos);
  }

  const onClick: React.MouseEventHandler<HTMLButtonElement> = (e): void => {
    setTodos([...todos, todo]);
    setTodo(" ")
    console.log(todos)

  }

  return (
    <div className={style.container}>
      <h1><u> Todo List</u></h1>
      <br />
      <div className={style.app}>
        <input className={style.setTodo} type="text" onChange={onChange} value={todo} />
        <button className={style.button} onClick={onClick}> +</button>
      </div>
      {todos.length === 0 ? <h4>Hiç Todo Yok..</h4> : <List todos={todos} />}

    </div>
  );
}

export default App;
