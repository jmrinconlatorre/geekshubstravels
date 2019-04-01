require ('./config');//hace las variables de entorno (solo ejecuta el archivo, no se guarda en variable)


const express = require ('express');

const router = require("./routes");
const hbs = require('hbs');
const hbsUtils = require('hbs-utils')(hbs);//nos devuelve una funcion y la ejecutamos
hbs.registerPartials(`${__dirname}/views/partials`);//para registrar los parciales
hbsUtils.registerWatchedPartials(`${__dirname}/views/partials`);

const PORT = process.env.PORT || 3000;

const app = express();

app.set('view engine','hbs');//motor para hacer las vistas en hbs
app.set('views',`${__dirname}/views`);//le decimos donde van a estar las vistas

app.use(express.json());
/**
 * __filename -> ruta desde / hasta el archivo actual
 * __dirname -> ruta desde / hasta la carpeta del archvo
 */
app.use('/',express.static(`${__dirname}/public`));

app.use(router);

//http://localhost:3000/hbs
app.get('/home',(req,res)=>{//renderiza el archivo de hbs a html non-blocking synchronization(nbs:)
    res.render('home.hbs',{
        title: "Home",
        // users: [
        //     {id: 1,name:"Juanma"},
        //     {id: 2,name:"Manolo"},
        //     {id: 3,name:"Pepe"}
        // ],
        // admin:{
        //     name: "Juanma",
        //     fullname: "Juanma Rincón"
        // },
        layout: "template.hbs"
    });
})

app.get('/register',(req,res)=>{//renderiza el archivo de hbs a html non-blocking synchronization(nbs:)
    res.render('register.hbs',{
        title: "Register",
        users: [
            {id: 1,name:"Juanma"},
            {id: 2,name:"Manolo"},
            {id: 3,name:"Pepe"}
        ],
        admin:{
            name: "Juanma",
            fullname: "Juanma Rincón"
        },
        layout: "template.hbs"
    });
})

app.listen(PORT,()=>{
    console.log(`Puerto levantado en http://localhost:${PORT}`)
})

