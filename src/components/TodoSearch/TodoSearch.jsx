import React from 'react'
import './TodoSearch.css'

const TodoSearch = () => {
  
  const onSearchValueChange = (event) => {
    console.log(event.target.value)
  }

  return (
    <input 
    className="TodoSearch" 
    placeholder= "¿Buscas un TODO?" 
    onChange={onSearchValueChange}
    />
  )
}

export { TodoSearch }
