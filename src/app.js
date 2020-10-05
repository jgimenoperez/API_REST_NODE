const express= require('express');
const app=express();

const morgan =require('morgan')
const bodyParser=require('body-Parser')

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

require('./routes/userRoutes')(app) ;


//settings
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'),()=>{
    console.log('Server on port 3000');
});