import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app=express();
const port=3001;

app.use(cors());
app.use(express.json());

//creating db connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'event-registration',
});

//creating get api to fetch all event
app.get('/list', function (req, res) {
  const sql = 'SELECT * FROM eventregistration';
  db.query(sql, function (err, results) {
    if (err) return res.json(err);
    return res.json(results);
  });
});

//creating post api to add event reg data
app.post('/register', function (req, res) {
  const sql = 'INSERT INTO `eventregistration` (`participantname`, `eventname`, `eventdate`) VALUES (?, ?, ?)';
  const values = [
    req.body.participantName,
    req.body.eventName,
    req.body.eventDate,
  ];

  db.query(sql, values, function (err, results) {
    if (err) { return res.json(err); }
    return  res.json('Registration successful');
  });
});

app.get('/', function(req, res) {
  return res.json('Backend Server is running');
});

app.listen(port, function() {
  console.log(`Backend Server is running on http://localhost:${port}`);
});