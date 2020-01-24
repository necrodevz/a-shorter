import React from 'react';

import {useAuth0} from '../react-auth0-spa';

import AppBar from '@material-ui/core/AppBar';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

import NavButton from './NavButton'
import MenuIcon from '@material-ui/icons/Menu';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    body: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: '3px',
      borderRadius: '5px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export default function Layout({children, loading})
{
    const [open, setOpen] = React.useState(false);
    const {isAuthenticated, loginWithPopup, logout} = useAuth0();
    const classes = useStyles();
    return(
        <div className={classes.body}>
        <AppBar position="absolute">
            <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                A-NET Client Enterprise Application
            </Typography>
            {!isAuthenticated && <Button color="inherit" onClick={()=>loginWithPopup({})}>Login</Button>}
            {isAuthenticated && <Button color="inherit" onClick={()=>logout()}>Logout</Button>}
            </Toolbar>
            {loading && <LinearProgress color="secondary" />}
        </AppBar>
        <Container fixed>
            {children}
        </Container>
        <NavButton open={open} setOpen={setOpen} />
    </div>
    )
}