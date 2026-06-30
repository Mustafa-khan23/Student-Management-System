const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const data = require("./data.json");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use("/images", express.static("public/images"));

app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});

app.get("/", (req, res) => {
  res.render("home", { data });
});

app.get("/students", (req, res) => {
  res.render("students", { data });
});

app.get("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const usr = data.find((student) => student.id === id);

  if (!usr) {
    return res.status(404).render("error");
  }

  res.render("detail", { usr });
});
