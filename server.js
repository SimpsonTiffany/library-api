const express = require('express');
const app = express();

app.use(express.json());

// Example book data
let books = [
    { id: 1, title: 'Dune', author: 'Frank Herbert' },
    { id: 2, title: '1984', author: 'George Orwell' },
];

// Example GET route
app.get('/api/books', (req, res) => {
    res.json(books);
});

// Start server only if this file is run directly
if (require.main === module) {
    const PORT = 3000;
    app.listen(PORT, () => console.log(`📚 Server running on port ${PORT}`));
}

// Export app for testing
module.exports = app;



