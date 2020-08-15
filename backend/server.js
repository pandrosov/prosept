import express from 'express';
import data from './data';
import path from 'path';
import dotenv from 'dotenv'
import config from './config'
import mongoose from 'mongoose'

dotenv.config();

const mongodbUrl = config.MONGODB_URL
mongoose.connect(mongodbUrl, {
  useNewParcer: true
}).catch(error => console.error(error.reason));

const app = express();

app.get('/api/products', (req, res) => {
    res.send(data.products)
})

app.use(express.static(path.join(__dirname, '/../frontend/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
});


app.listen(process.env.PORT || 5000, () => {console.log("Server startea at port: 5000")})
