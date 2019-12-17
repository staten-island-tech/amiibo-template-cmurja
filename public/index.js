const path = require("path");
const express = require("express");
const app = express();


//define paths for express
const publicDirectoryPAth= path.join(__dirname, "../public");
const viewsPath = path.join(__dirname,"../templates/views");




// setup handlebars engine and views location
app.set("views engine", "hbs");// tell express/node to use handlebars for templates
app.set("views", viewsPath);//tel express to get templates/views folder

app.get("", (req, res) => {
  try {
    res.render("index");
  }catch (error){
    res.status(500).send("page not found");
  }
});
app.get("/thamisucks", (req, res) => {
  res.send("Thami sucks. And Yes I have to do this while you eat");
});
app.listen(3000, () => {
  console.log("Listening on port 3000");
  console.log(__dirname);
});

//127.0.0.1:3000
