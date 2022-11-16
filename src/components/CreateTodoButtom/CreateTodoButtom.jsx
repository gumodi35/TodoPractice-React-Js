//import React from 'react'
import './CreateTodoButtom.css'

const CreateTodoButtom = () => {
  
  const onClickButton = (msg) => {
    console.log(msg)
  }

  return (
    <button 
      className="CreateTodoButton"
      onClick={() => onClickButton('Este es el mensaje')}
      >
      +
    </button>
  );
}

export { CreateTodoButtom }
