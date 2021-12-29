import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@material-ui/core";
import useStyles from "./Styles";
import { Link } from "react-router-dom";
import {
  UserOutlined,
  UserDeleteOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import Logo from '../../../assets/cinemax.png';
import {useMyContext} from '../../../context'


function NavbarComponent() {
  const classes = useStyles();

  const {user} = useMyContext();
  const userName = user?.firstName;


  const logOut = () => {
    localStorage.removeItem("token");
    window.location.replace("/");
  };

  return (
    <div className="subHeader">
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
        <img src={Logo} width="70px" />

          <Typography variant="h6" className={classes.title} color="inherit">
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              {" "}
              Home
            </Link>
            <Link
              to="/Action"
              style={{ color: "white", textDecoration: "none" }}
            >
              Action
            </Link>
            <Link
              to="/Comedy"
              style={{ color: "white", textDecoration: "none" }}
            >
              Comedy
            </Link>

            <Link to="/Drama" style={{ color: "white", textDecoration: "none" }}>
              Drama
            </Link>
            <Link to="/Family" style={{ color: "white", textDecoration: "none" }}>
              Family
            </Link>
          </Typography>

          <div className={classes.grow} />
          <div className={classes.button}>
          <IconButton>
            <Link
              to="/Login"
              style={{ color: "white", textDecoration: "none" }}
            >
               {user ? `Hello, ${userName}` : "Login"}
              <UserOutlined style={{ fontSize: "22px", marginLeft: "15px" }} />
            </Link>
          </IconButton>
          <IconButton>
            <Link
              to="/Favorites"
              style={{ color: "white", textDecoration: "none" }}
            >
              <HeartOutlined style={{ fontSize: "22px", marginLeft: "15px" }} />
            </Link>
          </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    
    </div>
  );
}

export default NavbarComponent;
