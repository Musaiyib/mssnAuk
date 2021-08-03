import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography} from "@material-ui/core";
import './App.css'
import mssnLogo from './img/mssn-auk-logo.jpeg'
import aukLogo from './img/auk.png'
// import { NavLink } from 'react-router-dom';
// import {NavBtnLink, NavLink} from './NavElement';

const useStyles = makeStyles((theme) => ({
    navHeader: {
      flexGrow: .2,
      marginLeft: 20,
      marginRight: 20,
      fontSize: 18,
      color: "#1b5e20",
    },
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    navContainer: {
        backgroundColor: 'white',
        minWidth: 280,
    },
    
}));

const NavBar= () => {

    const classes = useStyles();
    return (
        <AppBar position="relative" className={classes.navContainer} style={{width: "100%"}}>
            <Toolbar className={classes.container}>
                <img src={aukLogo} alt="aukLogo" className={classes.img1} width="35px" height="30px" />
                <Typography variant="h6" color="primary" className={classes.navHeader}>
                    MSSN AUK CHAPTER
                </Typography>
                <img src={mssnLogo} alt="mssnLogo" className={classes.img2} width="30px" height="30px" />
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
