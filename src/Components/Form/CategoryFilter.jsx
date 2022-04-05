import React from 'react';

const CategoryFilter = ({dishes, ctgType, handleChange}) => {
  const categories = ['all', ...new Set(dishes.map(ele => ele.category))];

  return (
    <fieldset>
        <legend>Category</legend>
				{
				categories.map(ctg => 
					(
						<label htmlFor={ctg} name='ctgType' key={ctg}>
							<input onChange={handleChange} type="radio" value={ctg} id={ctg} name='ctgType' checked={ctgType === ctg} />
							{ctg}
						</label>
					)
				)
				}
    </fieldset>
  )
}

export default CategoryFilter