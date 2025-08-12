import React, { useState } from 'react'
const App = () => {
  const [username, setUsername] = useState('');
  const submitHandler = (e)=>{
    e.preventDefault();
    console.log(username)
    setUsername("")
  }
  return (
    <div className='form'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input
        value={username} 
        onChange={(e)=>{
          setUsername(e.target.value)
        }} type="text" placeholder='Enter Username' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App