const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// For testing connection
/*
app.get('/', (req, res) => {
    res.json({
        message: 'Hello world'
    });
});
*/

// Default response for any other request (Not Found)
// Will override everything else so put at bottom
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});