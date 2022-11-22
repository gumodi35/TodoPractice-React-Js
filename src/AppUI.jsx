import React from 'react'
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { CreateTodoButtom } from "./components/CreateTodoButtom/CreateTodoButtom";

const AppUI = ({ 
    error,
    loading,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
    }) => {
  return (
    <React.Fragment>
    <TodoCounter
      total={totalTodos}
      completed={completedTodos}
    />
    <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />

    <TodoList>
        {error && <p>Algo fallo, vuelve intentar por favor!...</p>}
        {loading && <p>Cargando, espera por favor!...</p>}
        {(!loading && !searchedTodos.length) && <p>!Crea tu primer TODO¡</p>}
       

      {searchedTodos.map(todo => (
        <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed} 
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
        />
      ))}
    </TodoList>
    
    <CreateTodoButtom /> 
  </React.Fragment>
  );
}

export { AppUI }
