const express = require('express');

const app = express();

const PORT = 3000;

// Middleware
app.use(express.json());

// Home route
app.get('/', (req, res) => {
    res.send('<h1>Welcome to Express Server!</h1>');
});

// About route
app.get('/about', (req, res) => {
    res.send('<h1>This is About Page</h1>');
});

// Contact route
app.get('/contact', (req, res) => {
    res.send('<h1>Contact Us</h1><p>Email: sherawataman@gmail.com</p>');
});

// API route
app.get('/api/users', (req, res) => {
    const users = [
        { id: 1, name: 'Aman' },
        { id: 2, name: 'Rahul' },
        { id: 3, name: 'Rohit' }
    ];

    res.json(users);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});