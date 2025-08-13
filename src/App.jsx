import React from 'react'
import Card from '../Card'
const App = () => {
  const users = [
  {
    "username": "ali_khan",
    "city": "Lahore",
    "age": 28,
    "profession": "Software Engineer"
  },
  {
    "username": "sana_ahmed",
    "city": "Karachi",
    "age": 32,
    "profession": "Graphic Designer"
  },
  {
    "username": "usman_raza",
    "city": "Islamabad",
    "age": 24,
    "profession": "Digital Marketer"
  },
  {
    "username": "fatima_qureshi",
    "city": "Multan",
    "age": 30,
    "profession": "Doctor"
  },
  {
    "username": "hamza_mir",
    "city": "Faisalabad",
    "age": 27,
    "profession": "Civil Engineer"
  }
  ]

  return (
    <div className='comp'>
      {users.map(function(elem,idx){
        return <Card key={idx} name={elem.username} city={elem.city} age={elem.age} prof={elem.profession}/>
      })}
    </div>
  )
}

export default App