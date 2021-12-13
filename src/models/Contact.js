const {Schema, model} = require('mongoose');

const contactSchema = new Schema({
    name: {
        type: String,
        require: true,
        trin: true
    },
    lastName: String,
    phone: {
        type: Number,
        require: true
    },
    modificated: {
        type: Boolean,
        default: false
    },
},{
    timestamps:true,
    // Para que no tengamos la propiedad extra
    versionKey: false
});

// model('Nombre del modelo', Que esquema tomara como referencia)
module.exports = model('Contact', contactSchema);