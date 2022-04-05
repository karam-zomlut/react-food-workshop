import React from 'react'

const Search = ({searchValue, handleChange}) => {
  return (
    <fieldset>
        <legend>Search</legend>
        <input onChange={handleChange} type="text" value={searchValue} name='searchValue' />
    </fieldset>
  )
}

export default Search