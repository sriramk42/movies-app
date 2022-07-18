import React, { useState, useEffect } from "react"

import './App.css'
import Movie from "./Movie"

import SearchIcon from './search.svg'
const API_URL = "http://www.omdbapi.com?apikey=8474d9a6"



const App = () => {
  const [title, setTitle] = useState("")
  const [movies, setMovies] = useState([])

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
    console.log(data.Search)
  }

  useEffect(() => {
    searchMovies('batman')
  }, [])

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input 
          placeholder="" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <img 
          src={SearchIcon} 
          alt="search" 
          onClick={() => {searchMovies(title)}} 
        />
      </div>

      { movies.length > 0 ? (
        <div className="container">
          {movies.map(movie => (
            <Movie key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )
        
      }
      
      

    </div>
  )
}

export default App