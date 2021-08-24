const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname + "/dist/epam-ang"));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/epam-ang/index.html"));
});

app.listen(process.env.PORT || 8000);
