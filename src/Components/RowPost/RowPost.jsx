import React,{useEffect, useState} from 'react'
import './RowPost.css'
import {API_KEY} from '../../constants/constants'
import axios from '../../axios'

// import axios

function RowPost() {
  const [movies, setMovies] = useState([])
  useEffect(() =>{
axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then(response =>{
  console.log(response.data);
  setMovies(response.data.results)
}).catch(error=>{
  alert('network error')
})
  },[])
  return (
    <div className='row'>
        <h2>Netflix Originals</h2>
        <div className='posters'>
          {movies.map((obj)=>
            
     <img className='poster' alt='poster' src='https://wallpaperaccess.com/full/1096726.jpg'   />
          )}
   
       
        
        </div>
    </div>
  )
}

export default RowPost