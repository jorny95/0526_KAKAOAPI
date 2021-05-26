/* express nunjucks / index.html render */

const express = require('express');
const app = express();
const nunjucks = require('nunjucks');

app.set('view engine','html');
nunjucks.configure('views',{
    express:app,
})

app.get('/',(req,res)=>{
    res.render('index3')
});

app.listen(3000,()=>{
    console.log('server start 3000')
})