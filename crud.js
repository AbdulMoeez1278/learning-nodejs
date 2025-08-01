const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON request bodies

let items = []; // Simple in-memory array to simulate data storage

// Create (POST)
app.post('/items', (req, res) => {
    const newItem = req.body;
    items.push(newItem);
    res.status(201).json(newItem);
});

// Read (GET) - All items
app.get('/items', (req, res) => {
    res.json(items);
});

// Read (GET) - Specific item by ID
app.get('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = items.find(item => item.id === id);
    if (item) {
        res.json(item);
    } else {
        res.status(404).send('Item not found');
    }
});

// Update (PUT)
app.put('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedItem = req.body;
    const index = items.findIndex(item => item.id === id);
    if (index !== -1) {
        items[index] = { ...items[index], ...updatedItem };
        res.json(items[index]);
    } else {
        res.status(404).send('Item not found');
    }
});

// Delete (DELETE)
app.delete('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const initialLength = items.length;
    items = items.filter(item => item.id !== id);
    if (items.length < initialLength) {
        res.status(204).send(); // No Content
    } else {
        res.status(404).send('Item not found');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});