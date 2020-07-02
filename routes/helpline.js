const express = require('express');
const router = express.Router();

// Helpline Details model
const Helpline = require('../models/Helpline');

// To get list of Doctos
router.get('/', (req,res) => {
    Helpline.find({}, (err, results) => {
        if (!err) {
            if (!req.user) {
                res.render('helpline', { login_info: false, details: results });
            }
            else {
                res.render('helpline', { login_info: true, details: results });
            }             
        } else {
            req.flash('error_msg', 'Error. Please refresh the page.');
            return res.redirect('/');
        }
    }); 
});

// To get full details of doctor wit id specified
router.get('/:id', (req,res) => {
    Helpline.findById(req.params.id, (err, results) => {
        if (!err) {
            if (!req.user) {
                res.render('doc', { login_info: false, doc_details: results });
            }
            else {
                res.render('doc', { login_info: true, doc_details: results });
            }             
        } else {
            req.flash('error_msg', 'Error. Please refresh the page.');
            return res.redirect('/');
        }
    });
});

// To add Helpline Details
// @TO-DO: Add promise

// router.post('/add', (req,res) => {
//     data = req.body
//     data.forEach(element => {
//         const { firstName, lastName, qualification, speciality, hospital, location, email, telephone, skype } = element;
//         const newHelpine = new Helpline({
//             firstName, 
//             lastName,
//             qualification, 
//             speciality, 
//             hospital, 
//             location, 
//             email,
//             telephone,
//             skype
//         });  
//         newHelpine.save()
//     })
//     return res.json({"success":"OK"})
// })

module.exports = router;