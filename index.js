const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const data = require("./data.json");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});

app.get("/", (req, res) => {
  res.render("home", { data });
});
