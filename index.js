const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 4001;

app.use(bodyParser.text());
const filePath = 'data.txt';


app.get('/data', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading the file');
    } else {
      res.send(data);
    }
  });
});


app.post('/data', (req, res) => {
  const text = req.body;

  fs.writeFile(filePath, text, (err) => {
    if (err) {
      res.status(500).send('Error writing to the file');
    } else {
      res.send('File updated successfully');
    }
  });
});


app.put('/data', (req, res) => {
  const text = req.body;

  fs.writeFile(filePath, text, (err) => {
    if (err) {
      res.status(500).send('Error updating the file');
    } else {
      res.send('File updated successfully');
    }
  });
});


app.delete('/data', (req, res) => {
  fs.unlink(filePath, (err) => {
    if (err) {
      res.status(500).send('Error deleting the file');
    } else {
      res.send('File deleted successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
