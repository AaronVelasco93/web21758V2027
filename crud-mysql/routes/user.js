const express = require('express');
const router = express.Router();
const db = require("../db");

//mostrar todos los usuarios.
router.get('/',(req,res)=>{
    let consulta = 'SELECT id, nombre, correo FROM users';
    db.query(consulta, (err,results)=>{
        if(err) return res.send('Error en la consulta');
        res.render('index',{
            users: results
        });
    });
});

//agregar nuevo usuario
router.post('/add',(req,res)=>{
    const {nombre , correo} = req.body;

    const validateQuery='SELECT id FROM users WHERE correo = ? LIMIT 1';
    const insertQuery = 'INSERT INTO users (nombre, correo) VALUES (?,?)';
    
    db.query(validateQuery,[correo],(err,results)=>{
        //error de consulta
        if(err){
            console.log(err);
            return res.status(500).json({
                error: 'Error al validar el correo'
            });
        }
        //Si ya existe un registro con ese correo
        if(results.length > 0){
            return res.status(400).json({
                error: 'El correo ya esta registrado. Captura otro correo'
            });
        }
        //Si el correo No existe, entonces procede a insertar el usuario
       
    });
    db.query(insertQuery,[nombre, correo],(err,results)=>{
        //si ocurre un error durante la insercion
        if(err){
            console.log(err);
            //detectamos si el error es por duplicidad en la base de datos
            if(err.code === 'ER_DUP_ENTRY'){
                return res.status(400).json({
                    error: 'El correo ya esta registrado'
                });
            }
            //otro tipo de error general
            return res.status(500).json({
                error: 'Error al agregar usuario'
            });
        }
        //Si todo sale bien
        res.json({
            mensaje: 'Usuario agreado correctamente'
        });
     });
});
//Mostrar en formulario para editar un usuario 


router.get('/edit/:id',(req,res)=>{
    let consulta = 'SELECT * FROM users WHERE id= ?';
    db.query(consulta,[req.params.id],(err,results)=>{
        if(err) return res.send('Error al buscar usuario');
        res.render('edit',{
            users: results[0]
        });
    });
});
//actualizar usuario
router.post('/update/:id',(req,res)=>{
    const id = req.params.id;

    const {nombre, correo} = req.body;

    const validateQuery = 'SELECT id FROM users WHERE correo = ? AND id <> ? LIMIT 1';
    const updateQuery = 'UPDATE users SET nombre = ?, correo = ? WHERE id = ?'; 

    db.query(validateQuery,[correo,id],(err,results)=>{
        if(err){
            console.log(err);
            return res.status(500).json({
                error: 'Error al validar el correo'
            });

        }
        if(results.length > 0 ){
            return res.status(400).json({
                error: 'El correo ya esta registrado por otro usuario'
            });
        }
    });
    db.query(updateQuery,[nombre, correo, id],(error,results)=>{
        if(error){
            console.log(error);

            if(err.code === 'ER_DUP_ENTRY'){
                return res.status(400).json({
                    error: 'El correo ya esta registrado. Intenta nuevamente'
                });
            }

        }
        res.json({
            mensaje: 'Usuario actulizado correctamente'
        });
    });

});

router.get('/delete/:id',(req,res)=>{
    let consulta = 'DELETE FROM users WHERE id = ?';
    db.query(consulta,
        [req.params.id],
        err=>{
            if(err) return res.send('Error al eliminar');
            res.redirect('/');
        });
});
module.exports = router;