const express = require('express');
const app = express();
const port = 5000;

const userRouter = require('./routers/userRouters');
const cors = require('cors');

app.use(express.json());

app.use('/user',userRouter);
app.get('/', (req, res) => {
  res.send('Working fine');

});
app.get('/home', (req, res) => {
  res.send('Responce from home');
})

//add
//delete

app.listen(port,()=>{console.log('server started')})
