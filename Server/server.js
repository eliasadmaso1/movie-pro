const express = require("express");
const bodyParser = require('body-parser');
const app = express();

const cors = require('cors');
app.use(cors());

const db = require('./DB');
const movieRouter = require('./Routes/MoviesRoute');
const userRouter = require("./Routes/userRouter");


app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.urlencoded({extended:true}));



app.use('/movies',movieRouter);
app.use("/users", userRouter);



app.listen(3000,()=>{
    console.log("app listen to port 3000!");
});