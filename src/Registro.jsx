import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import {useState, useEffect} from 'react'
import axios from 'axios';
import Perfil from './Perfil'
import Admin from './Admin'
import './styles.css'

import swal from 'sweetalert';

const Registro = () => {

  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const user = { username, email, password1, password2 };
    // send the username and password to the server
    const response = await axios.post(
      "https://lectorbrainbook.herokuapp.com/rest-auth/registration/",
      user
    ).then(function (response) {
      //store the user in localStorage
      localStorage.setItem('user', response.data)
      setUser(response.data)
      // store the user in localStorage
      localStorage.setItem('userKey', JSON.stringify(response.data))
      localStorage.setItem('userName', username)
      localStorage.setItem('userEmail', email)
      console.log(response.data);
      window.location='/Perfil';

    })
      .catch(function (error) {
        // handle error
        console.log(error);
        swal({
          title: "Error",
          text: "Alguno de los campos es incorrecto.",
          icon: "error"
        });
      })
      ;;
  

    
      

  };

 
  
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      //Posible fallo de codigo
     // const foundUser = JSON.parse(loggedInUser);
      setUser(loggedInUser);
    }
  }, []);


// if there's a user show the message below

//Esto esta comentado xq su uso tiene que ser de forma mas segura

// if (user && user==='felipe') {
//   return <div><Admin /></div>;
// }
// if (user) {
//   return <div><Perfil /></div>;
//}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="Bookbrain">
        BookBrain
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


  

  const classes = useStyles();
  if (user) {
    if(username==='felipe'){
      return <div><Admin /></div>;
    }
    return <div><Perfil /></div>;
  }
  return (
    <div class="form">
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className="avatarBook" maxWidth="medium" src='./LogoWeb.svg'>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registro
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Nombre de usuario"
                autoFocus
                onChange={({ target }) => setUsername(target.value)} required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Direccion de email"
                name="email"
                autoComplete="email"
                onChange={({ target }) => setEmail(target.value)} required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={({ target }) => setPassword1(target.value)} required
                
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Repita la contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={({ target }) => setPassword2(target.value)} required
                
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Registrarse
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="Inicio" variant="body2">
                ¿Ya tienes una cuenta? Inicia sesión.
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
    </div>
  );
}

export default Registro;