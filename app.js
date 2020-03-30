const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


//This loads all our environment variables from keys.env file
require("dotenv").config({path:"./config/keys.env"});

// create the app object
const app = express()


// -- MIDLEWARE above the routes

//Handlebars midleware (this tells express to set Handlebars as the template engine)
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));

// Set-up our static elements 
app.use(express.static('public'));



mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
   console.log(`The app is connected to MongoDB Database`);
})
.catch(err=>console.log(`Error connectiong to Database ${err}`));

/*
   We use the express.Router to create modular, mountable route handlebars. A Router instance is a complete middleware and routing system; for this reason is refered as a mini-app
*/

/*Routes, note: this routes are commented to show that after applying modularity to the app using controllers and through the Express Router.
   So the routes are inside each of the controllers
*/

/*
   //Home route
app.get("/",(req, res)=>{
   res.render("general/home",{
      title: "Hello I'm Jorge"
   });
});

   //Resume
app.get("/resume",(req, res)=>{
   res.render('general/resume', {
      title: "My Resume"
   });
});

   //Projects
app.get("/projects", (req, res)=>{
   res.render('portfolio/projects', {
      title: "Portfolio"
   });
});

   //Contact
app.get("/contact",(req, res)=>{
   res.render('general/contact', {
      title: "Contact Me"
   });
});
      //When user submit a message
app.post("/contact", (req, res)=>{
  // res.render();
});

*/

//To map the routes back to the entry point file
   // 1st we load (import) each controller
const generalController = require("./controllers/general");
const portfolioController = require('./controllers/portfolio');
   // 2nd map each controller to the app object
app.use("/", generalController);
app.use("/", portfolioController);


/*As a full complete MVC app we can create folder in our views directory in terms of organization, in this project we use a directory "porfolio" for the routes related to the projects I've done so far. And a general folder for the routes related to the site as the contact, resume, etc
*/


//Set-up a server

const PORT = process.env.PORT;

app.listen(PORT,()=>{
   console.log(`Server up and running in port ${PORT}`);
})