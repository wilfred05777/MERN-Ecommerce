const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to express" });
});

const port = 5000;
// https://www.youtube.com/watch?v=vyghWcWvlAA&list=PLZdXBpi-l7C7bM_rwTOcWaZv8FInVQYMz&index=2
