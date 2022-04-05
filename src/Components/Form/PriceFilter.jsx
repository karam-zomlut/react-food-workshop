import React from 'react'

const PriceFilter = ({minPrice, maxPrice, handleChange}) => {
  return (
    <fieldset>
      <legend>Price</legend>
      <label htmlFor="minPrice">Min Price</label>
      <input value={minPrice} onChange={handleChange} type="range" name="minPrice" min={0} max={10} step={1} />
      <label htmlFor="maxPrice">Max Price</label>
      <input value={maxPrice} onChange={handleChange} type="range" name="maxPrice" min={0} max={10} step={1} />
    </fieldset>
  )
}

export default PriceFilter