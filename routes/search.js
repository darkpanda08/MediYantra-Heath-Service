const express = require('express');
const router = express.Router();

// Testing Centres model
const Testing = require('../models/Testing');

// Search Page
router.get('/', (req,res) => {
    if (!req.user) {
        res.render('search', { login_info: false });
    }
    else {
        res.render('search', { login_info: true });
    }
});

// Display Testing Centres Details
router.post('/', (req,res) => {
    Testing.find({ state: req.body.state }, (err,results) => {
        console.log(results);
        if (!err) {
            if (!results.length ) {
                req.flash('error_msg', 'Error. Please refresh the page.');
                return res.redirect('/');
            } else {
                if (!req.user) {
                    res.render('test_details', { login_info: false, testing_details: results });
                }
                else {
                    res.render('test_details', { login_info: true, testing_details: results });
                }     
            }       
        } else {
            req.flash('error_msg', 'Error. Please refresh the page.');
            return res.redirect('/');
        }
    }); 
});

// To add Testing Centres Details
router.post('/add', (req,res) => {
    const { state, hospitalName} = req.body;
    const newTesting = new Testing({
        state,
        hospitalName
    });

    newTesting.save()
        .then(testing => {
            res.json({"success":testing});
        })
        .catch(err => console.log(err));
})


module.exports = router;