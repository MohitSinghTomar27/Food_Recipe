import React from 'react'
import axios from 'axios'
import './Recipes.css'
const API_KEY = "456d99381f4046768087e9c31d3d5696"
class Recipe extends React.Component{
    constructor(){
        super()
        this.state = {
            recipe : {}
        }
    }
    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&includeNutrition=true`)
            .then((response) => {
                console.log(response)
                const recipe = response.data
                this.setState({recipe})
            })
    }
    render(){
        console.log(this.props)
        const recipe = this.state.recipe
        return(
            <div className = "container">
                <div className = "active-recipe">
                <img className = ".active-recipe__img" src = {recipe.image} style = {{height : "350px"}}/>
                <h3 className = "active-recipe__title">{recipe.title}</h3>
                <h4 className = "active-recipe__publisher"> Publisher  : <span>{recipe.sourceUrl}</span></h4>
                <p><strong>Description</strong> : {recipe.instructions}</p>
                </div>
            </div>
        )
    }
}
export default Recipe