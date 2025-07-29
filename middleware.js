express = require('express');
app = express();

const myMiddleware =  (req,res,next)=>{
    console.log('This middleware will run on all requests')
    next();
}

app.use(myMiddleware);

app.get('/',(req,res)=>{
    res.send('HomePage')
})

app.get('/products', (req,res)=>{
    res.send('Products')
})

app.listen(4000, () => {
    console.log('Server is running at http://localhost:4000')
})