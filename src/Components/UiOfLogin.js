import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import fire from '../config/Fire';
import {Link as RRL} from 'react-router-dom' 
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

class Login extends Component{
  constructor(props){
    super(props);
    this.login = this.login.bind(this)
    this.refreshPage = this.refreshPage.bind(this)
    this.state = {
      email: '',
      password: ''
    }
    
  }
  
  handleEmailChange = (e) =>{
    e.target.value.toString();
   this.setState({email: e.target.value})
   
  }
  handlePassChange = (e) =>{
    e.target.value.toString();
    this.setState({password: e.target.value})
  }
  login(e) {
    e.preventDefault();
    console.log("is this being called?")
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
      this.refreshPage();
    }).catch((error)=>{
      console.log(error);
    }  )

  }
   refreshPage(){
window.location.reload();
  }
render(){
  const classes = this.props.classes;
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            value = {this.state.email}
            name="email"
            autoComplete="email"
            autoFocus
            onChange = {this.handleEmailChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            value = {this.state.password}
            id="password"
            autoComplete="current-password"
            onChange = {this.handlePassChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {this.login}
          >
            Sign In
          </Button>
          <RRL to = {"createnewrecipe"}>
          <Button>
          Testing
          </Button>
          </RRL>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
}

export default Login