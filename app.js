const express=require('express')
const mongoose=require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongo');
const pageRoute=require('./routes/pageRoute')
const courseRoute=require('./routes/courseRoute')
const categoryRoute=require('./routes/categoryRoute')
const userRoute=require('./routes/userRoute')

const app=express();


// Connect DB
mongoose.connect('mongodb://0.0.0.0:27017/smartedu-db')
.then(()=>{
    console.log('DB Connected Successfuly');
})


//Tamplate Engine
app.set("view engine", "ejs")



//Global Veriable

global.userIN = null



// MiddleWares

app.use(express.static("public"))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(session({
    secret: 'my_keyboard_cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb://0.0.0.0:27017/smartedu-db' }),


  }))
  


//Routes
app.use('*',(req,res,next)=>{
    userIN=req.session.userID
    next()
    
})
app.use('/',pageRoute);
app.use('/courses',courseRoute);
app.use('/categories',categoryRoute);
app.use('/users',userRoute)





const port=3000;
app.listen(port,()=>{
    console.log(`App started on port ${port}`);
})