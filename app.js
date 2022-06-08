const express=require('express')
const pageRoute=require('./routes/pageRoute')

const app=express();

//Tamplate Engine
app.set("view engine", "ejs")


// MiddleWares
app.use(express.static("public"))

//Routes
app.use('/',pageRoute);






const port=3000;
app.listen(port,()=>{
    console.log(`App started on port ${port}`);
})