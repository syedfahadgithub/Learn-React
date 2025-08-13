import React from 'react'

const Card = (props) => {
  return (
    <div className='main'>
    <div className='card'>
        <h2>{props.name}</h2>
        <h3>{props.city},{props.age}</h3>
        <p>{props.prof}</p>
        <button>Add friend</button>
    </div>
    </div>
  )
}

export default Card