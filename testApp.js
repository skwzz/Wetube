import express from "express";
const testApp = express();

testApp.get("/", function(req, res) {
  res.send("PORT 4041");
});

export default testApp;
