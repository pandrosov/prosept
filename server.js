import express from 'express';
import data from './backend/data'
import path from 'path'

const app = express();

app.get('/api/products', (req, res) => {
    res.send(data.products)
})

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'))

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    })
}


app.listen(5000, () => {console.log("Server startea at port: 5000")})