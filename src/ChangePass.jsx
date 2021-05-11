import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as AxiosLogger from 'axios-logger';
import Navigator from './Navigator'
import './styles.css'
//Alertas
import swal from 'sweetalert';


//material ui
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import BuildIcon from '@material-ui/icons/Build';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    // color: "green",
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  }
  }));

const ChangePass = () => {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [user, setUser] = useState()

  



  const handleSubmit = async e => {
    e.preventDefault();
    var prev = ' Token '
    var combo = prev + localStorage.getItem('userKey').substring('8', '48')
    
    const response = axios.request({
      url: 'http://lectorbrainbook.herokuapp.com/rest-auth/password/change/',
      method: 'post',
      headers: { 'Authorization': combo },
      data: {
        'new_password1': password,
        'new_password2': password2
      },

    }).then(function (response) {
      console.log(response.data);
      swal({
        title: "Exito",
        text: "El cambio de contraseña ha sido realizado correctamente.",
        icon: "success",
      });

    })
      .catch(function (error) {
        // handle error
        console.log(error);
        swal({
          title: "Error",
          text: "Ha habido un fallo en el proceso.",
          icon: "error"
        });
      })
      ;
  }



    ;
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      //Posible fallo de codigo
      // const foundUser = JSON.parse(loggedInUser);
      setUser(loggedInUser);
    }
  }, []);
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
		}
	  }));
	const classes = useStyles();

  return (
    
    <view>
      <Navigator />
      <div class="form">
<Container component="main" maxWidth="xs">
  <CssBaseline />
  <div className={classes.paper}>
    <Avatar className={classes.avatar}>
      <VerifiedUserIcon />
    </Avatar>
    <Typography component="h1" variant="h5">
      Cambio de contraseña
    </Typography>
    <form className={classes.form} noValidate>
      <TextField
       variant="outlined"
       margin="normal"
       required
       fullWidth
       name="password"
       label="Nueva contraseña"
       type="password"
       id="password"
       autoComplete="current-password"
       onChange={({ target }) => setPassword(target.value)} required
        
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Repetir nueva contraseña"
        type="password"
        id="password"
        autoComplete="current-password"
        onChange={({ target }) => setPassword2(target.value)} required
      />
      
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={handleSubmit}
      >
        Cambiar contraseña
      </Button>
      
      

    </form>
  </div>
  
</Container>
</div>

    </view>
  )

}

export default ChangePass;

