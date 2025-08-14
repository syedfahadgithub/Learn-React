import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setData] = useState([]);
  const getimg = async ()=>{
    const response = await axios.get('https://picsum.photos/v2/list')
    setData(response.data)
 
  }
   useEffect(() => {
    getimg()
  }, []);  
  return (
    <div>
      <button onClick={()=>{
        getimg()
      }}>Get Data</button>
      <div className='datapath'>
        {data.map(function(elem,idx){
        return <div key={idx} className='fetch'>
          <img src={elem.download_url} alt="" />
          <h1>{elem.author}</h1>
        </div>

      })}
      </div>
      
    </div>
  )
}

export default App