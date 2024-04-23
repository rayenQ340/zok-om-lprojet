let router = require("express").Router();
const { Sequelize } = require("sequelize");
const _User = require("../models/user");
const jwt = require("jsonwebtoken");

let secretKey = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY5NDg2Nzc4MywiaWF0IjoxNjk0ODY3NzgzfQ.m8qitj_9g1F_eAjwLF4h8o0hfQlgcGm41wG_TK8qhQI";

//login
router.post("/login", (req, res) => {
  _User
    .findOne({
      where: {
        FullName: req.body.FullName,
        Password: req.body.Password,
      },
    })
    .then((result) => {
      const payload = {
        FullName: result.FullName,
      };
      const options = {
        expiresIn: "24h",
      };
      const token = jwt.sign(payload, secretKey, options);
      return res
        .status(200)
        .json({ message: "logged In successfully!", token: token });
    })
    .catch((err) => {
      return res.status(403).json({ message: "Unauthorized!" });
    });
});
//Add user
router.post("/add_user", (req, res) => {
  _User
    .create({
      FullName: req.body.FullName,
      Password: req.body.Password,
      Region: req.body.Region,
      PhoneNumber: req.body.PhoneNumber,
      Email: req.body.Email,
    })
    .then((result) => {
      return res.send("user added");
    })
    .catch((err) => {
      return res.status(500).json({ message: "Error adding user!" });
    });
});
router.get("/test-db-connection", async (req, res) => {
  try {
    // Create a test connection to the database
    const sequelize = new Sequelize("mydb", "rayen", "rootroot", {
      host: "localhost",
      dialect: "mysql",
    });

    // Test the connection by authenticating
    await sequelize.authenticate();

    // If authentication is successful, respond with a success message
    res.status(200).json({ message: "Database connection successful" });
  } catch (error) {
    // If authentication fails, respond with an error message
    res
      .status(500)
      .json({ error: "Database connection failed", details: error.message });
  }
});

module.exports = router;
