const express = require("express");
const Router = express.Router();
const Controller = require("../Controller/userControllrs");

Router.get('/',Controller.getUsers);
Router.post('/registration',Controller.registerUser);
Router.post('/login',Controller.loginUser);


module.exports = Router;