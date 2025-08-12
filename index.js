require('dotenv').config()
const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res)=>{
    res.send("Hello, world!")
})

app.get('/login', (req, res)=>{
    res.send('<h1>jimmy@gmail.com</h1>')
})
app.get('/contact', (req, res)=>{
    res.send('<p>987296987</p>')
})
app.get('/address', (req, res)=>{
    res.send('Rajasthan')
})

app.listen(process.env.PORT, ()=>{
    console.log(
        `Examlpe app lisening on port ${port}`
    )
})