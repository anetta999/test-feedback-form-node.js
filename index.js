require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI;

(async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log('Connected to MongoDB');
        app.listen(PORT, () => { console.log('Server is up and running'); });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
})();