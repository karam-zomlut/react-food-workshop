import React from 'react'

const DishList = ({res}) => {
  return (
    <ul className="grid">
          {res.map(ele => (
            <li className="card" key={ele.id}>
              <h1 className="card-name">{ele.name}</h1>
              {ele.description ? <p className="card-desc">{ele.description}</p> : null}
              <p className="price">${ele.price}.00</p>
            </li>
          ))}
    </ul>
  )
}

export default DishList