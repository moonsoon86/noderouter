var express =require("express");
const path =require("path");
const HomePage = require("./routes/HomePage");
const RegisterPage = require("./routes/RegisterPage");
const port=process.env.port || 5000; 
var app=express();


app.use("/", HomePage);
app.use("/register", RegisterPage)


app.listen(port, ()=>{
    console.log(`I'm listening ${port}` )
});