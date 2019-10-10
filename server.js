const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const pictures = require('./routes/api/pictures');

const app = express();

//Body-parsing
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//DB config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Conneced'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello!'));

// Use Routes
app.use('/api/users', users);
app.use('/api/pictures', pictures);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
