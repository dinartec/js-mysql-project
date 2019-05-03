const router = require('express').Router();
import mysql from 'mysql';
import InitializeDatabase from '../ServerComponents/InitializeDatabase/InitializeDatabase';
import AddToDatabase from '../ServerComponents/AddToDatabase/AddToDatabase';
import UpdateSchema from '../ServerComponents/UpdateSchema/SchemaQuery';


const connection = mysql.createPool({
  connectionLimit: 10,
  host     : 'localhost',
  user     : 'root',
  password : 'admin',
  database : 'Inventario',
  multipleStatements: true
});


router.get('/',(req, res) => {
    res.render('inicio.hbs');
})

/* ----- Inicializar Database -----*/
router.get('/initdb', ( req, res ) => {
  InitializeDatabase();
  res.send('xd');
});

/* ----- Actualizar Schema ------- */
router.get('/updateschema', (req, res ) => {
  UpdateSchema();
  res.send('Good!');
});
/* ----- Prueba ---- */
router.get('/prueba', (req, res) => {
  const test = {
    tabla : 'cliente',
    telefono: 228,
    nombre: 'KKNEL',
    Direccion: '48564'
  }
  AddToDatabase( test )
    .then( response => res.send( response ) )
    .catch( response => console.log (response) );
});

/* ----- Clientes ----- */
router.get('/clientes',(req, res) => {
    connection.query('SELECT * FROM Cliente limit 10 ; SELECT Count(*) AS total from Cliente; ', function (error, results, fields) {
        if (error) throw error;
        var respuesta = JSON.parse(JSON.stringify(results[0]));
        var contar = JSON.parse(JSON.stringify(results[1]));
        contar = contar[0].total;
        res.render('clientes.hbs', {respuesta, contar});
    })
});

router.get('/clientes/borrar/:id', (req, res) => {
    const {id} = req.params;
    connection.query(`Delete from Cliente where ID_cliente = ${id}`, function(error, results, fields){
        if (error) throw error;
        res.redirect('/clientes');
    })
})

router.post('/clientes/nuevo', (req, res) => {
    
    const {nombre, telefono, direccion} = req.body;
    connection.query(`insert into cliente(Nombre,Telefono,Direccion) values('${nombre}','${telefono}','${direccion}')`, function (error, results, fields){
        if (error) throw error;
        res.redirect('/clientes')
    })
  
})

router.post('/clientes/buscar', function(req, res){
    const {busqueda, check} = req.body;
    connection.query(`SELECT * from Cliente where ${check} like '%${busqueda}%'`, function (error, results, fields){
        if (error) throw error;
        results.forEach(results => {
            console.log('\n\n\n\n\n');
            console.log('Se ha encontrado ' + results.nombre);
        });
       
        var respuesta = JSON.parse(JSON.stringify(results));
        res.json({ respuesta });
    })
});
module.exports = router;
