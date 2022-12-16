import React from "react";
import { useTodos } from "./useTodos";
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { CreateTodoButton } from "./components/CreateTodoButtom/CreateTodoButtom";
import { Modal } from "./components/Modal/Modal";
import { TodosLoading } from "./components/TodosLoading/TodosLoading";
import { EmptyTodos } from "./components/EmptyTodos/EmptyTodos";
import { TodosError } from "./components/TodosError/TodosError";
import { TodoHeader } from "./components/TodoHeader/TodoHeader";
import { ChangeAlertWithStorageListener } from "./components/ChangeAlert/ChangeAlert";

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
    setOpenModal,
    sincronizeTodos,
  } = useTodos();

  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          
        />
         <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
  
        /> 
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={
          (searchText) => <p>No hay resultados para {searchText}</p>
        }
      >
        {todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />

      <ChangeAlertWithStorageListener 
        sincronize = {sincronizeTodos}
      />

    </>
  );
}

export default App;
