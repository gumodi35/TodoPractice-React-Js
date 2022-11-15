import React from "react";
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { CreateTodoButtom } from "./components/CreateTodoButtom/CreateTodoButtom";
//import './App.css';

const todos= [
  {text: "Repasar React", completed: false},
  {text: "Completar Cursos", completed: false},
  {text: "Estudiar ingles", completed: false}
]

function App() {
  return (
  <React.Fragment>
    <TodoCounter />
    <TodoSearch />
    <TodoList>
      {todos.map(todo => (
        <TodoItem key={todo.text} text={todo.text} />
      ))}
    </TodoList>
    <CreateTodoButtom /> 
  </React.Fragment>
  )
}

export default App;
