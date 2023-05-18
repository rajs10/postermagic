const express = require('express');
const userRouter = require('./routers/userRouters');
const imageRouter = require('./routers/imageRouter');
const videoRouter = require('./routers/videoRouter');
const markerRouter = require('./routers/markerRouter');
const contactRouter = require('./routers/contactRouter')
const utilRouter=require('./routers/util')
const cors = require('cors');


const app = express();
const port = 5000;

app.use(cors({
  origin : ['http://localhost:3000']
}));
app.use(express.json());

app.use('/user',userRouter);
app.use('/image',imageRouter);
app.use('/video',videoRouter);
app.use('/util',utilRouter);
app.use('/marker',markerRouter);
app.use('/contact',contactRouter);


app.use(express.static('./static/uploads'))

app.get('/', (req, res) => {
  res.send('Working fine');

});
app.get('/home', (req, res) => {
  res.send('Responce from home');
})

//add
//delete

app.listen(port,()=>{console.log('server started')})
