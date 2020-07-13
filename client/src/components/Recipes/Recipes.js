import React from 'react'
import axios from 'axios'
import Form from '../Search/Form'
import RecipesMap from './RecipesMap'

const API_KEY = "feb2f5b4746e49e183f64b9143a93b99"
class Recipes extends React.Component{
	constructor(){
	  super()
	  this.state = {
		recipes : []
	  }
	}
	getRecipe = (e) =>{
	  const recipeName = e.target.elements.recipeName.value
	  e.preventDefault()
	  console.log(recipeName)
	  axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${recipeName}&apiKey=${API_KEY}&includeNutrition=true.`)
			.then(response => {
			  console.log(response.data.results)
			  const recipes =  response.data.results
			  this.setState({recipes})
			})
			  .catch(err => {
				console.log(err);
  });
	}
	render(){
	  return (
		<div>
		  <header>
			<h1>Recipe Search</h1>
		  </header>
		  <Form getRecipe = {this.getRecipe}/>
		  {/* {
			this.state.recipes.map((recipe) => {
			  return (
				<div>
				  <img src = {recipe.image} alt = {recipe.title} />
				  <p>{recipe.title}</p>
				</div>
			  )
			})
		  } */}
		  <RecipesMap recipes = {this.state.recipes}/>
		</div>
	  )
	}
  }
  
  export default Recipes