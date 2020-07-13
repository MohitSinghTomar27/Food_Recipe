import React from 'react'
import axios from 'axios'

class Register extends React.Component{
    constructor(){
        super()
        this.state = {
            username : '',
            email : '',
            password : ''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formdata = {
            username : this.state.username,
            email : this.state.email,
            password : this.state.password
        }
        axios.post('http://localhost:3025/user/register' , formdata)
            .then((response) => {
                console.log(response)
                if(response.data.hasOwnProperty('errors')){
                    alert('response.data.message')
                }else{
                    alert('successfully registered')
                    this.props.history.push('/users/login')
                }
            })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render(){
        return(
            <div className="container col-md-4">
               
                <form  className="form-signin" onSubmit={this.handleSubmit}>

                <h3 className="h1 mb-3 font-weight-normal text-center" >Register New User</h3>

                <label className="sr-only" htmlFor="username">Username</label>
                    <input type="text" id="username" className="form-control mb-3" placeholder="Username" name="username" onChange={this.handleChange}/>
                
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input type="text" id="email" className="form-control mb-3" placeholder="Email"  name="email" onChange={this.handleChange}/>

                    <label htmlFor="password" className="sr-only">Password</label>
                    <input type="password" id="password" className="form-control mb-3" placeholder="Password"  name="password" onChange={this.handleChange}/>

                    <button className="btn btn-lg btn-dark btn-block" type="submit">Register</button>                    
                  
                </form>
            </div>
        )
    }
}

export default Register