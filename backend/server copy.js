const express = require('express');
const data = require('./data');
const path = require('path');

const app = express();

app.get('/api/products', (req, res) => {
    res.send(data.products)
})

app.use(express.static(path.join(__dirname, '/../frontend/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
});


app.listen(process.env.PORT || 5000, () => {console.log("Server startea at port: 5000")})
