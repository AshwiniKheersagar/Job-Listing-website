import React from 'react'

const App = () => 
  {
    const name="John";
    const arr=['bard','moni','ashu'];
      return (
        <>
        <div className='text-5xl'>App</div>
        <p style={{color:'red',fontSize:'24px'}}>Hello {name}</p>
        <ul>
          {
            arr.map(
                (value,index)=>
                {
                  return <li key={index}>{value}</li>
                }
              )
          }
        </ul>
        </>
      )
}

export default App