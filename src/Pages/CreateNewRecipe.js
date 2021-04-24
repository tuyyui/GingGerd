import React, { Component } from 'react'
import fire from '../config/Fire'
import {Redirect} from "react-router-dom"
import Home from './Home'



 class CreateNewRecipe extends Component{
    constructor(props){
        super(props);
        this.state ={
          user : {}
        }
    }
  // Check to see if logged in
  componentDidMount()
  {
   
   console.log("Recipe App Testing")
    this.authListener()
  }
  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      console.log("Testing Create Recipe App");
      if(user){
        this.setState({ user });
        console.log("CreateRecipeApp?")
        localStorage.setItem('user', user.uid)
      }
      else
      {
        this.setState({user: null});
        localStorage.removeItem('user')
        return <Redirect to = {Home}/>

      }
    });
  }
render(){
        return (
            <div>
                <h1>{ this.state.user ? (<h1> Access Granted </h1>): (<h1> No Access you have to login. </h1>)}</h1>
            </div>
        )
}
    
}

export default CreateNewRecipe