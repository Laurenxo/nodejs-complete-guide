const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
// const expressHandlebars = require("express-handlebars");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require("./controllers/error")

const app = express();

// const hbs = expressHandlebars.create({
//   layoutsDir: "views/layouts/",
//   defaultLayout: "main-layout",
//   extname: "hbs",
// });

// app.engine("hbs", hbs.engine);
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes.routes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
