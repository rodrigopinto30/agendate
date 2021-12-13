const mongoose = require('mongoose');

(async ()=>{
    try {
        const db = await mongoose.connect("mongodb+srv://admin:admin@cluster0.dfdpx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
        console.log("db connected to ",  db.connection.name);
    } catch (error) {
                console.log(error);
    }
})();


//mongodb+srv://admin:admin@cluster0.dfdpx.mongodb.net/agendaDB?retryWrites=true&w=majority