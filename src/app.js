const express= require('express');
const app=express();

const morgan =require('morgan')
const bodyParser=require('body-Parser')



//middleware
app.set('json spaces', 4) //esablece espacios en la visualización por navegador
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

require('./routes/userRoutes')(app) ;

//settings
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'),()=>{
    console.log('Server on port 3000');
});

//https://www.youtube.com/watch?v=QNBozn-zPhs&list=PLL0TiOXBeDaiaFOobfapYZ2ughvAnCTrW&index=4