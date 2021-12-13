const app = require('./app');
require('./database');
// Nuestro servido comienza a escuchar en el puerto designado
app.listen(3000, ()=>{
    console.log('estoy en el puerto 3000');
});