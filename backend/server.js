const express = require('express');
const app = express(); 
const cors = require('cors');
const mongoose = require('mongoose'); 
require('dotenv').config();
const port = process.env.PORT || 5000;
console.log('port=' + port);
const URI = process.env.ATLAS; 
console.log('uri' + URI); 
app.use(cors());
app.use(express.json());
mongoose.connect(URI);  
//  Use the following if using older mongoose, e.g. 5.13.17
 mongoose.connect(URI, {useNewUrlParser: true, useCreateIndex: true}); 
const connection = mongoose.connection; 
connection.once('open', ()  => {
    console.log("MongoDB database connection established successfully"); 
}); 

 const moviereviewsRouter = require("./routes/moviereviews");
app.use('/moviereviews', moviereviewsRouter);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 
if (!process.env.ATLAS) {
    console.error("❌ Missing ATLAS URI in .env file");
  }