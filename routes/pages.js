// const express = require("express");
// const router = express.Router();
// const mainPage = require("../controllers/main");

import express from 'express'
const register = require('../controllers/registerController')

const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile("main.html", { root: "./public/html/" });

    // **USARLO CUANDO SEPA USAR LAS COOKIES CON FIREBASE**
    // if(req.user){
    //     res.render("main", {status: "loggedIn", user:req.user})
    // } else {
    //     res.render("main", {status:"loggedOut", user: "notLogged"})
    // }
    
});

router.post("/register", register);

// router.post("/googleAuth", googleAuth);

// router.post("/githubAuth", githubAuth);

// router.post("/facebookAuth", facebookAuth)

// router.get("sign_in", sign_in)
module.exports = router;