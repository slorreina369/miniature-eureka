const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.static('public'));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
})