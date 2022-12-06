//import React from 'react';
import {state, useState, useContext} from 'react';
//import { TodoProvider } from './components/TodoContext/TodoContext';
//import { AppUI }from './AppUI';
//import { TodoCounter } from './components/TodoCounter/TodoCounter';

function App() {

  const [state, setState] = useState("estado compartido")

  return (
    <>
      <TodoHeader>
        <TodoCounter />
        <TodoSearch />
      </TodoHeader >

      <TodoList>
        <TodoItem />
      </TodoList >
    </>

  )
}

function TodoHeader({ children }) {
  return (
   <header>
    { children }
   </header>
  )
}

function TodoList({ children }) {
  return (
    <section className="TodoList-container">
      { children }
    </section>

  )
}

function TodoCounter() {
  return <p>TodoCounter</p>
}

function TodoSearch() {
  return <p>TodoSearch</p>
}

function TodoItem({ state }) {
  return <p>TodoItem: {state}</p>
}

/* function App(){
  return(
  <TodoProvider>
    <AppUI/>
  </TodoProvider>);}
 */
export default App;