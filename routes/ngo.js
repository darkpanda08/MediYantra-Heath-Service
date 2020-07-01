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
// router.post('/', (req,res) => {
//     const { name, website, phone } = req.body;

//     const newNgo = new Ngo({
//         name,
//         website,
//         phone
//     });

//     newNgo.save()
//         .then(ngo => {
//             res.json({"success":ngo});
//         })
//         .catch(err => console.log(err));
// })

module.exports = router;