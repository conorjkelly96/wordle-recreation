require("dotenv").config();
const express = require("express");
const expressHandlebars = require("express-handlebars");
const path = require("path");

const routes = require("./routes");
const connection = require("./config/connection");
const handlebarshelpers = require("./helpers/handlebarshelpers");

const PORT = process.env.PORT || 3000;

// const handlebarsOptions = { handlebarshelpers };
const hbs = expressHandlebars.create({ helpers: handlebarshelpers });
const app = express();

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

const init = async () => {
  try {
    await connection.sync({ force: false });

    app.listen(PORT, () =>
      console.log(`Server Live @ http://localhost:${PORT} 🚀🚀🚀`)
    );
  } catch (error) {
    console.log(`[ERROR]: DB connection failed | ${error.message}`);
  }
};

init();
