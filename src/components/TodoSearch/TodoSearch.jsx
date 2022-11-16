import { useState } from 'react'
import './TodoSearch.css'


const TodoSearch = () => {
  
  const [searchValue, setSearchValue] = useState('');

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return [
    <input 
    key={1}
    className="TodoSearch" 
    placeholder= "¿Buscas un TODO?" 
    value={searchValue}
    onChange={onSearchValueChange}
    />,
    <p key={2}>{searchValue}</p>
  ];
}

export { TodoSearch }
