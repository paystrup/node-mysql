// Imports
import express from "express";
import cors from "cors";
import db from "./database.js";

// ========== Setup ========== //

// Create Express app
const server = express();
const PORT = process.env.PORT || 3000;

// Configure middleware
server.use(express.json()); // to parse JSON bodies
server.use(cors()); // Enable CORS for all routes

// ========== Routes ========== //

// Root route
server.get("/", async (req, res) => {
  // Check database connection
  const result = await db.ping();

  if (result) {
    res.send("Node.js REST API with Express.js - connected to database ✨");
  } else {
    res.status(500).send("Error connecting to database");
  }
});

//
// Get all users route
//
server.get("/users", async (req, res) => {
  // Get all users from database
  const query = "SELECT * FROM users"; // sql query
  const [users] = await db.execute(query); // execute the sql query
  console.log(users); // print result to console
  res.json(users); // send result / response as json
});

//
// Get user by id route
//
server.get("/users/:id", async (req, res) => {
  const id = req.params.id; // get id from url
  const query = "SELECT * FROM users WHERE id = ?"; // sql query
  const values = [id]; // values to insert into sql query
  try {
    const [user] = await db.execute(query, values); // execute the sql query
    if (user.length === 0) {
      res.status(404).send("User not found");
    } else {
      console.log(user);
      res.json(user); // send result / response as json
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving user");
  }
});

//
// Add user route
//
server.post("/users", async (req, res) => {
  const user = req.body; // get user from request body
  console.log(user); // print user data to console
  const query =
    "INSERT INTO users (name, mail, title, image) VALUES (?, ?, ?, ?)"; // sql query
  const values = [user.name, user.mail, user.title, user.image]; // values to insert into sql query

  try {
    const [user] = await db.execute(query, values); // execute the sql query
    if (user.length === 0) {
      res.status(404).send("User not found");
    } else {
      console.log(user);
      res.json(user); // send result / response as json
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating user");
  }
});

//
// Update user route
//
server.put("/users/:id", async (req, res) => {
  const id = req.params.id; // get id from url
  const user = req.body; // get user from request body
  console.log(user); // print user data to console
  const query =
    "UPDATE users SET name = ?, mail = ?, title = ?, image = ? WHERE id = ?"; // sql query
  const values = [user.name, user.mail, user.title, user.image, id]; // values to insert into sql query

  try {
    const [result] = await db.execute(query, values); // execute the sql query
    if (result.length === 0) {
      res.status(404).send("User not found");
    } else {
      console.log(result);
      res.json(result); // send result / response as json
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating user");
  }
});

//
// Delete user route
//
server.delete("/users/:id", async (req, res) => {
  const id = req.params.id; // get id from url
  const query = "DELETE FROM users WHERE id = ?"; // sql query
  const values = [id]; // values to insert into sql query

  try {
    const [result] = await db.execute(query, values); // execute the sql query
    if (result.length === 0) {
      res.status(404).send("User not found");
    } else {
      console.log(result);
      res.json(result); // send result / response as json
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting user");
  }
});

// Start server on port 3000
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
