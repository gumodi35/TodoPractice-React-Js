import React from "react";
import { useState } from 'react'
import { AppUI } from "./AppUI";
//import './App.css';

const defaultTodos= [
  {text: "Repasar React", completed: true},
  {text: "Completar Cursos", completed: true},
  {text: "Estudiar ingles", completed: false},
  {text: "Estudiar en Plaztzi", completed: true}
]

function App() {
// !Here we create a state for the search value and we pass it to the TodoSearch component
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(!searchValue.length >= 1){
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo =>  {
      const todotext= todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todotext.includes(searchText)
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed= true;
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      />
  )
}

export default App;
