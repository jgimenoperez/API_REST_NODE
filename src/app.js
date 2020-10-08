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


//PUBLICANDO UNA API REST

//https://www.youtube.com/watch?v=YkgNRgjjDDE
/*
    CODIGOS HHTP PARA DAR SIGNIFICADO A LA RESPUESTA

    201-RECURSO CREADO
    202-SOLICITUD RECIBIDA EN PROCESO
    204-SOLICITUD EXITOSA. RESPUESTA SIN CONTENIDO.
    401-NO AUTORIZADO
    403-ACCESO PROHIBIDO
    404-RECURSO NO ENCONTRADO
    405-METODO NO PERMITIDO
    500-ERROR INTERNO DEL SERVIDOR


*/