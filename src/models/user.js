const mysql=require('mysql');

connection=mysql.createConnection({
    host:'127.0.0.1',
    user: 'root',
    password: 'somewordpress',
    database: 'testapimysql '
});

let userModel={};

userModel.getUsers=(callback)=>{
    if (connection) {
       connection.query(
           'SELECT * FROM users ORDER BY id',
           (err,rows)=>{
           if (err){
               throw err;
           }else{
               callback(null,rows);
               
           }
       }
       )}
};

module.exports=userModel;