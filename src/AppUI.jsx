import React from 'react';
import { TodoContext } from './components/TodoContext/TodoContext';
import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoItem/TodoItem';
import { TodoForm } from "./components/TodoForm/TodoForm";
import { CreateTodoButton } from './components/CreateTodoButtom/CreateTodoButtom';
import { Modal } from './components/Modal/Modal';
import { TodosLoading } from './components/TodosLoading/TodosLoading';
import { EmptyTodos } from './components/EmptyTodos/EmptyTodos';
import { TodosError } from './components/TodosError/TodosError';

function AppUI() {
  
  const {
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo, 
    openModal, 
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);
  
  return (
    <React.Fragment>
      <TodoCounter
        totalTodos={totalTodos}
        completedTodos={completedTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {error && <TodosError error={error} />}
        {loading && <TodosLoading />}
        {(!loading && !searchedTodos.length) && <EmptyTodos />}
        
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
			{!!openModal && (
				<Modal>
					<TodoForm />
				</Modal>
			)}
			<CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export { AppUI };