import './TodoSearch.css'


const TodoSearch = ({ searchValue, setSearchValue }) => {

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input 
    className="TodoSearch" 
    placeholder= "¿Buscas un TODO?" 
    value={searchValue}
    onChange={onSearchValueChange}
    />
  )
}

export { TodoSearch }
