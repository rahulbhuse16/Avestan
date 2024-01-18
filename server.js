const express=require('express');
const app=express();
const connectDB = require("./db");
const Player = require("./models/schema");
const bp=require('body-parser');

connectDB();
app.use(bp.json());
app.get('/players',async(req,res)=>{
    const pl= await Player.find({});
    res.send(pl);

});
app.post('/api/userinput', async (req, res) => {
    try {
      const userInput = req.body;
      const newInput = new Player(userInput);
      await newInput.save();
      res.status(201).json({ message: 'Input saved successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
app.listen(2000,()=>{
    console.log("server run on port 2000");
})