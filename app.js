// const express = require("express")
// const db = require("./routes/db-config")
// const flash = require("express-flash")
// const session = require("express-session")
// const cookieParser = require("cookie-parser")
// import {} from './app/firebase'
import  express  from "express";
import  database  from './routes/db-config.js'
import  flash  from 'express-flash'
import  session  from "express-session";
import cookieParser from "cookie-parser";

const path = require('path');

// const firebase_config = require('./app/firebase.js')
// const firebase = require('firebase')

const PORT = process.env.PORT || 5000
const app = express()



app.use("/css", express.static(path.join(__dirname, './public/css')));
app.use("/js", express.static(path.join(__dirname, './public/js')));
app.use('/app', express.static(path.join(__dirname, './app')));
app.use('/auth',express.static(path.join(__dirname, './controllers/auth')));
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(flash());


app.use(session({ 
    cookie: { maxAge: 60000 },
    store: new session.MemoryStore,
    saveUninitialized: false,
    resave: 'true',
    secret: 'secret'
}))

database.connect((err) => {
    if (err) throw err
    console.log("Database connected!");  
})

app.use("/", require("./routes/pages"));


app.listen(PORT);