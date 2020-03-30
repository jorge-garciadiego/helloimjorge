/*
   In order to create the express router we first have to import express and then call the router function
*/

const express = require('express');
const router = express.Router();

/*
   Express Router allows us to create route handler using the Router object, so instead of saying app.get we use the router object and this is the reason why is called a mini-app
*/

//Home route
router.get("/",(req, res)=>{
   res.render("general/home",{
      title: "Hello I'm Jorge"
   });
});

   //Resume
router.get("/resume",(req, res)=>{
   res.render('general/resume', {
      title: "My Resume"
   });
});

//Projects
router.get("/projects", (req, res)=>{
   res.render('general/projects', {
      title: "Portfolio"
   });
});

      //Contact
router.get("/contact",(req, res)=>{
   res.render('general/contact', {
      title: "Contact Me"
   });
});
      //When user submit a message
router.post("/contact", (req, res)=>{
  // res.render();
});

module.exports = router;

//We need to map back the routes to the app object