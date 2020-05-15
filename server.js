const express = require("express");
const app = express();
const { write, read } = require("./db");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/index", (req, res) => {
  res.render("index.ejs");
});

app.post("/login", (req, res) => {
  read({
    name: req.body.username,
    password: req.body.password,
  });

  res.redirect("/index");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  let val = await write({
    name: req.body.username,
    password: req.body.password,
  });
  if (val) {
    res.redirect("/login");
  } else {
    // alert("xyz");
    res.redirect("/register");
  }
});

app.listen(4444, () => {
  console.log(`Server started on 4444`);
});
