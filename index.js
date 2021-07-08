const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");
const app = express();
const exphbs = require("express-handlebars");
const units = require("./Units");

//init middleware
// app.use(logger);

//handlebars middlewares
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//body parser middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//homepage route
app.get("/", (req, res) => res.render("index", { title: "unit app", units }));
//set static folder
app.use(express.static(path.join(__dirname, "public")));

//units API routes
app.use("/api/units", require("./routes/api/units"));
const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
