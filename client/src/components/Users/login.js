import React from 'react'
import axios from 'axios'


class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            email : '',
            password : ''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formdata = {
            email : this.state.email,
            password : this.state.password
        }
        axios.post('http://localhost:3025/user/login' , formdata)
            .then((response) => {
                if(response.data.error){
                    alert(response.data.error)
                }else{
                    const token = response.data.token
                    console.log(token)
                    localStorage.setItem('authToken' , token)
                    this.props.history.push('/recipes')
                    //window.location.reload()
                }
            })
    }

    handleChange =(e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render(){
        return(
            <React.Fragment>
                <div className="container-fluid col-md-4">
            <form className="form-signin" onSubmit={this.handleSubmit} >
                    
                    <h1 className="h1 mb-3 font-weight-normal text-center">Login</h1>

                    <label htmlFor="email" className="sr-only">Email</label>
                    <input type="text" id="email" className="form-control mb-3" placeholder="Email"  name="email" onChange={this.handleChange}/>

                    <label htmlFor="password" className="sr-only">Password</label>
                    <input type="password" id="password" className="form-control mb-3" placeholder="Password"  name="password" onChange={this.handleChange}/>

                    <button className="btn btn-lg btn-dark btn-block" type="submit" style = {{backgroundColor : "e74c3c"}}>Login</button>
                </form>
            </div>
            </React.Fragment>
        )
    }
}

export default Login