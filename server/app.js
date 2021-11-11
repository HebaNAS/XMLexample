import express from "express";
import xmlparser from "express-xml-bodyparser";
import bodyParser from "body-parser";
import cors from "cors";
import mysql from "mysql";
import qs from "qs";
import o2x from "object-to-xml";

const app = express();

// setup database
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "Company",
});

// Middleware to use
app.use(cors());
app.use(express.json());
//app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(xmlparser());

app.get("/list", function (req, res) {
  let sql = `SELECT * FROM Employee`;
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.set("Content-Type", "text/xml");
    res.send(
      o2x({
        '?xml version="1.0" encoding="utf-8"?': null,
        Employees: {
			Employee: data
		},
      })
    );
    console.log(data);
  });
});

app.post("/add", function (req, res) {
  if (req.header("Content-Type").endsWith("xml")) {
    console.log(req.body);
    res.send(req.body);
  }
});

module.exports = {
  path: "/",
  handler: app,
};
