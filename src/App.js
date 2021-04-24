
import React, {Component} from 'react'
import fire from './config/Fire';
import Home from './Pages/Home';
import Login from './Components/UiOfLogin'
import UiStyles from './Pages/Login'
import UiOfLogin from './Components/UiOfLogin'
import CreateNewRecipe from './Pages/CreateNewRecipe';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'




class App extends Component{

  constructor(props){
    super(props)
    this.state={
      user: {}
    }
  }

  componentDidMount(){
    this.authListener();
  }
  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      console.log("Testing");
      if(user){
        this.setState({ user });
        console.log("Did it get here?")
        localStorage.setItem('user', user.uid)
      }
      else
      {
        this.setState({user: null});
        localStorage.removeItem('user')
      }
    });
  }


  render(){
    
    return(
      <>
      <Router>
        <Switch>
        <Route exact path = "/"   >{this.state.user ? (<Home />) : (<UiStyles/>)}</Route>
        <Route path = "/login" exact component = {UiStyles}></Route>
        <Route path = "/createnewrecipe" exact component = {CreateNewRecipe}></Route>
        </Switch>
      </Router>
      
      </>
    )
  }
}

export default App;
