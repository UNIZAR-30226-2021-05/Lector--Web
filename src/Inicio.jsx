import './styles.css'
// import { Link } from 'react-router-dom'

import React from 'react';
import logo from './LogoWeb.svg';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Perfil from './Perfil'
import Admin from './Admin'
import './styles.css'
import swal from 'sweetalert';

const Inicio = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState()

  const clickChange = (e) =>{
    e.preventDefault();
    console.log('Clickado cambiar contraseña');
    window.location='/changepas';
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const userB = { username, password };
    // send the username and password to the server
    const response = await axios.post(
      "https://lectorbrainbook.herokuapp.com/rest-auth/login/",
      userB
    ).then(function (response) {
      console.log('Clickado sign in');
      setUser(response.data)
      //store the user in localStorage
      localStorage.setItem('userKey', JSON.stringify(response.data))
  
      localStorage.setItem('userName', JSON.stringify(username))
      localStorage.setItem('user', JSON.stringify(response.data))
      console.log(response.data);
      console.log(username);
      if(username==='adminBrain'){
        /* window.location='/Admin'; */
        return <div><Admin/></div>
      }
      window.location='/Perfil';

    })
      .catch(function (error) {
        // handle error
        console.log(error);
        swal({
          title: "Error",
          text: "Usuario o contraseña incorrectos.",
          icon: "error"
        });
      })
      ;
    

    ;
    
    

    //set the state of the user
   
    //const contextK = useContext(response.data)

  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      //Posible fallo de codigo
     // const foundUser = JSON.parse(loggedInUser);
      setUser(loggedInUser);
    }
  }, []);

  



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        BrainBook
      </Link>{' '}
      
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

  const classes = useStyles();

  if (user) {
    if(username==='adminBrain'){
      return <div><Admin /></div>;
    }
    return <div><Perfil /></div>;
  }
  return (
    <div className="form">
      <h1 id="titulo" align="center" > BRAINBOOK </h1>
      <div class="img" align="center">
          <img src={logo} className="App-logo" alt="logoApp" title="logo AppName" weight="150" height="150"/>
      </div>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className="avatarBook"  
          src='./LogoWeb.svg' /> */}
        <Typography component="h1" variant="h5">
          Iniciar sesión en BrainBook
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Nombre de usuario"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={({ target }) => setUsername(target.value)} required
            
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={({ target }) => setPassword(target.value)} required
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              {/*<Link href="#" variant="body2">
              Forgot password?
              </Link>*/}  
            </Grid>
            <Grid item medium inline-grid >
              <Link classname="REG"  href="registro" >¿Aún no tienes cuenta? Regístrate ahora.</Link>
            </Grid>
          </Grid>
          

        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    </div>
  );
}

export default Inicio;