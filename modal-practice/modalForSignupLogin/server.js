"use strict";
console.clear();

const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware to parse body data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Route for /login
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public" , "index.html"));
});

app.post("/login", (req, res) => {
  let { email, password } = req.body;

  res.send({
    success: true,
    email,
    password,
  });
});

// Route for /signup
app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "public" , "index.html"));
});

app.get("/xyz", (req, res) => {
  res.sendFile(path.join(__dirname, "public" , "index1.html"));
});

app.post("/signup", (req, res) => {
  let { name, email, password } = req.body;

  res.send({
    success: true,
    name,
    email,
    password,
  });
});


app.use(function(req,res,next){
	
	res.status(404).send("please send request : /login or /signup or /xyz") ;
	
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
