const express = require('express');
// importamos handlebars
const {engine} = require('express-handlebars');
// Creamos nuestro servido
const app = express();
// Nos permite concatenar directorios independientemente del SO
const path = require('path');   
// Llamamos a middleware que se ejecutara antes que las rutas sean llamadas
const morgan = require('morgan');

// Seteamos el servidor, indicando donde esta la carpeta view
// (Se utiliza __dirname porque se espera una ruta absoluta)
app.set('views', path.join(__dirname, 'views'));
// Configuramos un motor de plantilla que es handleBars (con su extension '.hbs')
app.engine('.hbs', engine({
    // Nos permite evitar repetir codigo
    // layoutDir: seteamos en la carpeta (con direccion absoluta) que debe leer el motor, es decir, que sera c://...
    layoutsDir: path.join(app.get('views'), 'layouts'),
    // defaultLayout: indicamos que archivo es el que tiene que leer
    defaultLayout: 'main',
    // extname: indicamos que extension es la que se tomara
    extname: ".hbs",
}));
// Indicamos a express que utilice la configuracion establecida
app.set('view engine', '.hbs');
// Middleware
// Nos indicara las peticiones hechas y numero de la operacion (304, 200, 404, etc)
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
// Static file
app.use(express.static(path.join(__dirname, 'public')))
// Importamos las rutas iniciales
const indexRoutes = require('./routes/index.routes'); 

//Le decimos a nuestro servidor que use las rutas
app.use(indexRoutes);

module.exports = app;