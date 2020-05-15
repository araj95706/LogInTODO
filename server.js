const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({extended=false}));

let users=[];

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.post('/login', (req, res) => {
    let name=req.body.name;
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});


app.post("/register", (req, res) => {
    users.push({
        id:Date.now.toString(),
        name: req.body.name,
        password: req.body.password
    })
});


app.listen(4444, () => {
  console.log(`Server started on 4444`);
});
