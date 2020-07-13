import React from 'react'
import image from './image.png'

function Home() {
	return (
		<React.Fragment>
			<div className = "container-fulid">
			<div className="col-xs-1 text-center mt-3">
                <h2 className="mb-5"><b>Welcome To The Recipe Khajana</b></h2>
                <img className = "ml-1" src= {image}alt="Images of Recipes" style = {{height : '550px' ,width : '550px'}}/>
                <br/><br/><br/>
            </div>  
			</div>
                 
        </React.Fragment>
	)
}

export default Home
