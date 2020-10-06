const User = require('../models/user');

module.exports = function (app) {


    app.get("/usuario", (req, res) => {

        //res.json([]);

        User.getUsers((err, data) => {

            res.status(200).json(data);
            //console.log(data)
        });


    });

    app.post('/usuario', function (req, res) {

        const userData={
            id:null,
            username:req.body.username,
            password:req.body.password,
            email:req.body.email,
            create_at: null,
            updated_at:null
        }

        User.insertUser(userData,(err,data)=>{
            if (data && data.InsertId){

                res.json(
                    {
                        success: true,
                        msg: 'Usuario insertado',
                        data: data
                    }
                )

            }else{
                res.status(500).json({
                    success: false,
                    msg:'Error'
                })
            }
        })    
        //res.send('[POST]Saludos desde express');
        //console.log(req.body)
    })

    app.put('/usuario/:id', function (req, res) {
        

        const userData={
            id:req.params.id,
            username:req.body.username,
            password:req.body.password,
            email:req.body.email,
            create_at: null,
            updated_at:null
        }


        User.updateUser(userData,(err,data)=>{
            console.log(data.msg)
            if (data && data.msg){

                res.json(
                    {
                        success: true,
                        msg: 'Usuario actualizado',
                        data: data
                    }
                )

            }else{
                res.status(500).json({
                    success: false,
                    msg:'Error'
                })
            }
        })    
        
        //res.send('[POST]Saludos desde express');
        //console.log(req.body)
    })

    app.delete('/usuario/:id', function (req, res) {
        

        const userData={
            id:req.params.id,
        }


        User.deleteUser(userData,(err,data)=>{
            console.log(data.msg)
            if (data && data.msg){

                res.json(
                    {
                        success: true,
                        msg: 'Usuario eliminado',
                        data: data
                    }
                )

            }else{
                res.status(500).json({
                    success: false,
                    msg:'Error'
                })
            }
        })    
        
    })    

};