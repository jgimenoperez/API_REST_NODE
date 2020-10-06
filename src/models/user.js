const mysql = require('mysql');

connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'somewordpress',
    database: 'testapimysql'
});

let userModel = {};

userModel.getUsers = (callback) => {
    if (connection) {
        connection.query(
            'SELECT * FROM users ORDER BY id',
            (err, rows) => {
                if (err) {
                    throw err;
                } else {
                    //console.log(rows)
                    callback (null, rows);
                }
            }
        )
    }
};

userModel.insertUser=(userData,callback)=>{
     if (connection) {
         connection.query(
             'INSERT INTO users SET ?',userData,
              (err, result) => {
                if (err) {
                  callback (err, null);
                   // throw err;
                } else {
                    //console.log(rows)

                    callback (null, {
                        'InsertId': result.insertId
                    });
                }                  
              } 
         )
     }
};

userModel.updateUser=(userData,callback)=>{

    if (connection) {
        const sql=`
            UPDATE users SET
            username=${connection.escape(userData.username)},
            password=${connection.escape(userData.password)},
            email=${connection.escape(userData.email)}
            WHERE id =${connection.escape(userData.id)}
        `
        console.log(sql)
        connection.query(sql,(err,result)=>{
            if (err) {
                callback (err, null);
            }else{
                callback (null, {
                'msg':'succes'
                 });
            }
        })
    }
}

userModel.deleteUser=(userData,callback)=>{
    
    if (connection) {
        const sql=`
            delete from users 
            WHERE id =${connection.escape(userData.id)}
        `
        console.log(sql)
        connection.query(sql,(err,result)=>{
            if (err) {
                callback (err, null);
            }else{
                callback (null, {
                'msg':'succes'
                 });
            }
        })
    }
}

module.exports = userModel;