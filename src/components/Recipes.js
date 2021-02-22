import React from 'react'
import style from '../recipe.module.css'
const Recipes = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>Cal: {calories}</p>
      <img src={image} alt='' className={style.image} />
    </div>
  )
}

export default Recipes
