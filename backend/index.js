const express = require("express");
const env = require("./config/envConfig");
const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to express" });
});

const port = env.PORT || 5000;

app.listen(port, () => {
  console.log(`Your server is running at port number: ${port}`);
});

// https://www.youtube.com/watch?v=vyghWcWvlAA&list=PLZdXBpi-l7C7bM_rwTOcWaZv8FInVQYMz&index=2
