const express = require('express')
const port = 3001
const path = require('path')
const mongoose = require('mongoose');
const User = require('./model/user')
const bcrypt = require('bcryptjs');

const app = express()

app.use(express.json());

app.use('/',express.static(path.join(__dirname,'static')))

// connect to mongodB
const dbURI = 'mongodb+srv://testuser:test123@nodetuts.kiou2.mongodb.net/users?retryWrites=true&w=majority';

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology:true,
  useCreateIndex: true
})

app.get('/api/reg', (req, res) => {
  res.status(200).json({success: true})
});

app.post('/api/reg', (req, res) => {
  console.log(req.body.username);
  res.status(200).json(req.body);
  console.log(req.body.username);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})





