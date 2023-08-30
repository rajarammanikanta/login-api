// index.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Parse incoming JSON data
app.use(bodyParser.json());

// Simulated database of users
const users = [
  { username: 'abc@gmail.com', password: 'password1' },
  { username: 'abc1@gmail.com', password: 'password2' }
];

// Endpoint for user login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Find the user in the simulated database
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
