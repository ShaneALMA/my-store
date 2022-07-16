import { useState } from "react";

import search from '../../assets/search.svg'

const SearchBar = () => {

  const [inputVal, setInputVal] = useState('')
  const [auxVal, setAuxVal] = useState('')

  const Data = [
    'Leche Gloria Tarro Azul Grande',
    'Leche Gloria Tarro Azul Pequeño',
    'Jabón Marsella',
    'Jabón Bolívar',
  ]

  const handleSearchInput = (e) => {
    const { value } = e.target
    setInputVal(value)
    setAuxVal(value)
  }

  const handleClickItem = (item) => {
    setInputVal(item)
    setAuxVal('')
  }

  return ( 
    <div className="SearchBar">
      <input type="text" placeholder="buscar..." value={inputVal} 
        onChange={handleSearchInput} />
      <img src={search} alt="search" />
      {
        auxVal === '' ? null : 
        <div className="cont">
          {Data.filter(val => {
            const fixedVal = val.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            if (val.toLowerCase().includes(inputVal.toLowerCase()) || fixedVal.toLowerCase().includes(inputVal.toLowerCase())) {
              return val
            }
          }).map((val, key) => 
            <h3 key={key} onClick={() => handleClickItem(val)} 
              className="item">{ val }</h3>
          )}
        </div>
      }
    </div>
  );
}
 
export default SearchBar;