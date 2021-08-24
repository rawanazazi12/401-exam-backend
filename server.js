const express = require('express') // require the express package
const app = express() // initialize your express app instance

const cors=require('cors');
app.use(cors());
app.use(express.json());

require ('dotenv').config();

const mongoose=require('mongoose');
// mongoose.connect("mongodb://127.0.0.1:27017/flower", { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect(process.env.MONGO_ATLAS_URL, { useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false });


const PORT=process.env.PORT
 
const{getData,getUserData,createFav,getFav,deleteFav,updateFav}=require('./Controllers/FlowersController');
const{seedFlowersCollection}=require('./Models/FlowersModel')
// a server endpoint 
app.get('/', // our endpoint name
 function (req, res) { // callback function of what we should do with our request
  res.send('Hello World') // our endpoint function response
})
 
// seedFlowersCollection();
app.get('/allFlowers',getData);
app.get('/userData',getUserData);
app.post('/fav',createFav);
app.get('/fav',getFav);
app.delete('/fav/:id',deleteFav);
app.put('/favFlower/:id',updateFav)
app.listen(PORT,()=>{

    console.log(`Listening from ${PORT}`)
})