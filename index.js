// index.js

/**
 * Required External Modules
 */
const express = require("express");
const path = require("path");
/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "8000";
/**
 *  App Configuration
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

/**
 * Routes Definitions
 */
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/newpage", (req, res) => {
  res.render("newpage", { var: "value" });
});
app.get("/sample-project", (req, res) => {
  res.render("sample-project", { var: "value" });
});


/**
 * Server Activation
 */
app.listen(port, () => console.log(`View BRIC site at  http://localhost:${port}`));
