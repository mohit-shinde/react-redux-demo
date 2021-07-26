import React from 'react'

const Character = ({ item }) => {
  return (
    <div className='card'>
      
        <div className='card-front'>
          <img src={item.img} alt='' />
          <h1>{item.name}</h1>
        </div>
        
      
    </div>
  )
}

export default Character