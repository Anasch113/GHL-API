const express = require('express');


const port = 3000;


const app = express();


app.get('/', (req, res)=>{
    res.send("hello world")
});


app.get('/initiate', require('./initiate'));

app.get('/oauth/callback', require('./callback'));






app.listen(port, ()=>{
    console.log(`Server is starting on port ${port}`)
})