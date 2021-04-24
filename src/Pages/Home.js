import React from 'react'
import fire from '../config/Fire'
import {Component} from 'react'
import Create from '../Components/Create'
import RecipeHeading from '../Components/Recipe/RecipeHeading'
import { Button } from '@material-ui/core'
import CreateNewRecipe from './CreateNewRecipe'
import {Link} from 'react-router-dom'
import ProfileBar from '../Components/ProfileBar'
class Home extends Component {
    constructor(props){
        super(props);
        this.signup = this.signup.bind(this)
        this.logout = this.logout.bind(this)
        this.state = {
          email: "",
          password: ""
         
        }
        
      }
      
      handleEmailChange = (e) =>{
          console.log(this.state.email)
          e.target.value.toString();
        this.setState({email: e.target.value})
        
       }
       handlePassChange = (e) =>{
           e.target.value.toString();
         this.setState({password: e.target.value})
       }
    signup (e){
        console.log("Testing")
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) =>{
        
    }).catch((error)=>{console.log(error)})
    }
    logout(e){
      e.preventDefault();
      fire.auth().signOut().then((u) =>{

      }).catch((error)=>{console.log(error)})
    }
    render(){
    return (
        <div>
           <ProfileBar ></ProfileBar>
           <form action = "submit">
               <input id = "email" name = "email" value = {this.state.email} onChange = {this.handleEmailChange}></input>
               <input id = "password" name = "password" value = {this.state.password} onChange = {this.handlePassChange}></input>
            <button onClick = {this.signup}>Signup</button>
            <button onClick = {this.logout}>Logout</button>
            </form>
            <RecipeHeading title = "Low Acid Meal" description = "this is a description"/>
            <Create></Create>
            <Link to = {"createnewrecipe"}> <Button>Create</Button></Link>
        </div>
    )
}
}

export default Home