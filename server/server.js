const express = require('express');
const app = express();
const port = 4000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const UserSchema = require('./schemas/User');
const CommentSchema = require('./schemas/User');
const router = express.Router();
const cors = require('cors');

const dbRoute =
  'mongodb+srv://baiin:ragnarok328@baiin-l98d4.mongodb.net/sample_mflix';
mongoose.connect(dbRoute, { useNewUrlParser: true });
const db = mongoose.connection;

const User = mongoose.model('users', UserSchema);
const Comment = mongoose.model('comments', CommentSchema);

db.once('open', () => console.log('connected to the database'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get('/users', (req, res) => {
  User.find({}, function(err, users) {
    console.log(users);
    res.send(users);
  });
});

router.get('/comments/:userName', (req, res) => {
  const userName = req.params['userName'];

  Comment.find({ name: userName }, function(err, comments) {
    console.log(comments);
    res.send(comments);
  });
});

app.use(cors());
app.use('/api', router);

const server = app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
