const express = require("express");
const port = process.env.PORT || 5000;
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mysql = require("mysql");

require("dotenv").config();

const app = express();

// Parsing middleware
// Parse application/s-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Static Files
app.use(express.static("./public"));

// Setting Templating Engine
app.engine("hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", "hbs");

// Router
app.get("", (req, res) => {
	res.render("home");
});

app.listen(port, (err) => {
	if (err) {
		console.log("Error:", err);
	}
	console.log("Listening on port", port);
});
