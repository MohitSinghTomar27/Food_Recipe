import React from 'react';
import axios from 'axios'
//import Form from './components/Search/Form'
import {BrowserRouter, Link, Route , Switch} from 'react-router-dom'
import './App.css';
import Register from './components/Users/Register'
import Login from './components/Users/login' 

import Home from './components/Home/Home'
   
import Recipes from './components/Recipes/Recipes';
import Recipe from './components/Recipes/Recipe'

import {Navbar, NavbarBrand, Nav, NavItem} from 'reactstrap'

function App(){
  return (
    <BrowserRouter>

    <div className = "container-fluid">
      <Navbar style = {{backgroundColor : "orange"}} light expand = "md" className = "mb-5">
        <NavbarBrand className = "text-light"> Recipe Khajana</NavbarBrand>
        <Nav className = "ml-auto" navbar>
            <NavItem>
              <Link className = "nav-link text-light" to = "/">Home</Link>
            </NavItem>
            {
              localStorage.getItem('x-auth') ? (
               <React.Fragment>
                 <NavItem>
                  <Link className = "nav-link text-light" to = "/recipes">Recipes</Link>
                </NavItem>
               </React.Fragment>
              ):
              <React.Fragment>
                <NavItem>
                  <Link className = "nav-link text-light" to = "/users/register">Register</Link>
                </NavItem>
                <NavItem>
                  <Link className = "nav-link text-light" to = "/users/login">Login</Link>
                </NavItem>
              </React.Fragment>
            }
        </Nav>
      </Navbar>
          {/* <ul>
            <li><Link to = '/'>Home</Link> </li>
            {
              localStorage.getItem('authToken') ? 
              
              <div> 
                  <li><Link to = '/recipes'>Recipes</Link></li>                
              </div> : 
              
              <div>
                  <li><Link to = '/users/register'>Register</Link></li>
                  <li><Link to = '/users/login'>Login</Link></li>
              </div>
            }
           
          </ul> */}
       </div>
          <div>
            <Switch>
              <Route path = '/users/register' component = {Register} exact = {true} />
              <Route path = '/users/login' component = {Login} />
              <Route path = '/' component = {Home} exact = {true} />
              <Route path = '/recipes' component = {Recipes} exact = {true}/>
              <Route path = '/recipe/:id'component = {Recipe} />
            </Switch>
           
          </div>
    </BrowserRouter>
  
  )
}



export default App;
