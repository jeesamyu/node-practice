const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/' , (req,res)=>{
    res.render('home')
});

app.get('/product/:id' , (req,res)=>{
    res.render()
})

app.get('/about', (req,res)=>{
    res.send('about')
})

app.listen(3000)