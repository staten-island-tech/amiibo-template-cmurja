const path = require("path");
const hbs = require("hbs");
const express = require("express");
const app = express();


//define paths for express
const publicDirectoryPAth= path.join(__dirname, "../public");
constpartialsPath= path.join(_dirname, "../templates/partials");
const viewsPath = path.join(__dirname,"../templates/views");




// setup handlebars engine and views location
app.set("view engine", "hbs");// tell express/node to use handlebars for templates
app.set("view", viewsPath);//tel express to get templates/views folder
hbs.registerPartials(partialsPath);
app.get("", async (req, res) => {
  try {
    res.render("index", {
      title:"Our first express page"
    });
  }catch (error){
    res.status(500).send("page not found");
  }
});
app.get("/thamisucks", async (req, res) => {
  res.send("Thami sucks. And Yes I have to do this while you eat");
});
app.listen(3000, () => {
  console.log("Listening on port 3000");
  console.log(__dirname);
});


app.get("/about/:id", async (req, res) => {
  const name =req.params.id
  try {
    res.render("index", {
      title: `${name}`
    });
  }catch (error){
    res.status(500).send("page not found");
  }
});


app.get("/swag", async (req, res) => {
 try {
    res.render("swag");
      title: name
    });
  }catch {
    res.status(500).send("page not found");
  }
});




//127.0.0.1:3000
