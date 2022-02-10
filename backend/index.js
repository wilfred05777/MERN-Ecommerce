const express = require("express");
const env = require("./config/envConfig");
const app = express();
const connect = require("./config/db");
const userRoutes = require("./routes/userRoutes");
// database connection
connect();

// add middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to express" });
});

// user routes
app.use("/api", userRoutes);

const port = env.PORT || 5000;

app.listen(port, () => {
  console.log(`Your server is running at port number: ${port}`);
});

// https://www.youtube.com/watch?v=bp1NsII6TG4&list=PLZdXBpi-l7C7bM_rwTOcWaZv8FInVQYMz&index=4
