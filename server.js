const { application, json } = require('express');
const fs = require('fs');
const notes = require('./db/db.json');
const express = require('express');
const path = require('path');
const app = express();
const uniqid = require('uniqid');
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.static('public'));

app.get('/api/notes', (req,res) =>{
    res.sendFile(path.join(__dirname, './db/db.json'));
});

app.post('/api/notes', (req, res) =>{
    console.log(req.body);
    req.body.id = uniqid();
    //add new note to notes array
    notes.push(req.body);
    // save updated json
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify(notes, null, 2)
    );
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
})