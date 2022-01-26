const app = require(`express`)();
const next = require("next");

//! creates a check for dev vs production 
const dev = process.env.NODE_ENV !== "production";

const PORT = process.env.PORT || 3000

//! There are giant error warnings that pop up when in dev 
const nextApp = next({dev})

//! this is a buult in next router that will handle all request made to the server 

const handler = nextApp.getRequestHandler();

