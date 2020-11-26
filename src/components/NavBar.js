import React from "react";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { createStyles, Link, makeStyles } from "@material-ui/core";
import LinkBehavior from "./LinkBehavior";

const useStyles = makeStyles((theme) =>
  createStyles({
    navbar: {
      marginLeft: "20px",
    },
    navbaritem: {
      marginLeft: "10px",
      marginRight: "10px",
    },
  })
);

const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">News</Typography>
        <div className={classes.navbar}>
          <Link
            className={classes.navbaritem}
            color="inherit"
            component={LinkBehavior}
            to="/"
          >
            Home
          </Link>
          <Link
            className={classes.navbaritem}
            color="inherit"
            component={LinkBehavior}
            to="/users"
          >
            Users
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
