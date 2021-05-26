/* express nunjucks / index.html render */

const express = require('express');
const app = express();
const nunjucks = require('nunjucks');

app.set('view engine','html');
nunjucks.configure('views',{
    express:app,
})

app.get('/',(req,res)=>{
    res.render('index2')
});

app.listen(3333,()=>{
    console.log('server start 3333')
})