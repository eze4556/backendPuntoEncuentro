const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');
require('dotenv').config();

console.log('MONGO_URI:', process.env.MONGO_URI); 



const app = express();
const PORT = process.env.PORT || 8081;



// Middlewares
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }))


// Routes
app.get('/', (req, res) => {
  res.send('¡Backend de tu aplicación de punto encuentro funcionando perfectamente!');
});



// MongoDB Connection
mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));




// Start server
app.listen(PORT, () => {
  console.log(`Servidor backend en ejecución en http://localhost:${PORT}`);
});
