const express = require('express');
// Importamos el modulo para enrutar
const router = express.Router();
// Importamos modelos
const Contact = require('../models/Contact');

// Creamos un erutado
router.get('/', async(req, res)=>{
    // lean() para que nos devuelva un arreglo tipico de javascript.
    const contact = await Contact.find({}).lean();
    // Le decimos que lo vamos a pintar en el index.hbs y le enviamos el contenido
    res.render('index', {contacto: contact})
});
router.get('/about', (req, res)=>{
    res.render('about')
});
router.get('/note', (req, res)=>{
    res.render('note');
})
router.get('/edit/:id', async (req, res)=>{
    try{
        const contact = await Contact.findById(req.params.id).lean();
        res.render('edit', {contact})
    }catch(errror){
        console.log(error.message)
    }
});

router.post('/contact/add', async(req, res)=>{
    try{
        // Guardamos datos en modelo
        const contact = Contact(req.body)
        // Guardamos datos en la BD
        await contact.save();
        // Una vez almacenado el dato en la BD me redirecciona al home
        res.redirect('/')
    }catch(error){
        console.log(error)
    }
    
});
router.post('/edit/:id', async (req,res)=>{
    const id = req.params.id;
    await Contact.findByIdAndUpdate(id, req.body);
    res.redirect('/');
})

//eliminar pero con peticion get
router.get('/delete/:id', async(req, res)=>{
    const {id} = req.params;
    await Contact.findByIdAndDelete(id)
    res.redirect('/')
})
module.exports = router;