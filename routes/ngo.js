const express = require('express');
const router = express.Router();

// Ngo model
const Ngo = require('../models/Ngo');

router.get('/', (req,res) => {
    Ngo.find({}, (err, results) => {
        if (!err) {
            if (!req.user) {
                res.render('ngo', { login_info: false, details: results });
            }
            else {
                res.render('ngo', { login_info: true, details: results });
            }             
        } else {
            req.flash('error_msg', 'Error. Please refresh the page.');
            return res.redirect('/');
        }
    }); 
});


// To add NGO Details
// @TO-DO: Add promise
// Input should be [{"name":"", "website":"", "phone":""},{...}]

// router.post('/add', (req,res) => {
//     data = req.body
//     data.forEach(element => {
//         const { name, website, phone } = element;
//         const newNgo = new Ngo({
//             name,
//             website,
//             phone
//         })  
//         newNgo.save()
//     })
//     return res.json({"success":"OK"})
// })

module.exports = router;