import React from 'react'
import './RowPost.css'

function RowPost() {
  return (
    <div className='row'>
        <h2>Title</h2>
        <div className='posters'></div>
        <img className='poster' alt='poster' src='https://wallpaperaccess.com/full/1096726.jpg' 
         />
    </div>
  )
}

export default RowPost