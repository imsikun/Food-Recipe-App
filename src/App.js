import React, { useEffect, useState } from 'react'
import './App.css'

import Recipe from './components/Recipes'

const App = () => {
  const APP_ID = 'af36425e'
  const API_KEY = '3ff39c727cd7484d8e2d15fc9a787357'

  //using state

  //recipe state
  const [recipes, setReceipes] = useState([])

  //user input search state
  const [search, setSearch] = useState('')

  //state only submit itself only when i click the search button
  const [query, setQuery] = useState('chicken')

  //using UseEffect
  useEffect(() => {
    getRecipes()
  }, [query])

  const getRecipes = async () => {
    const res = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`
    )
    const data = await res.json()
    setReceipes(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('') //passing whatever we are input in the text box
  }
  return (
    <div className='App'>
      <form action='#' className='search-form' onSubmit={getSearch}>
        <input
          type='text'
          className='search-bar'
          value={search}
          onChange={updateSearch}
        />
        <button type='submit' className='search-btn'>
          Search
        </button>
      </form>
      <div className='recipes'>
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  )
}

export default App
