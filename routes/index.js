const express = require('express');
const router = express.Router();

const { ensureAuthenticated } = require('../config/auth');

// User model
const User = require('../models/User');

// Welcome Page
router.get('/', (req, res) => {
    if (!req.user) {
        res.render('dashboard', { login_info: false });
    }
    else {
        res.render('dashboard', { login_info: true });
    }
});

// Hospitals Near Me
router.get('/track', (req,res) => {
    if (!req.user) {
        res.render('near_me', { login_info: false });
    }
    else {
        res.render('near_me', { login_info: true });
    }
});


// Get data for beds
router.post('/loc', (req,res) => { 
    User.find({ plus_code: req.body.plus_code }, (err, results) => {
        res.json(results[0]);
    });
});

// Account Page
router.get('/account', ensureAuthenticated, (req,res) => 
    res.render('account', {
        name: req.user.name,
        email: req.user.email,
        phone: req.user.phone,
        plus_code: req.user.plus_code,
        beds_total: req.user.beds_total,
        beds_available: req.user.beds_available,
        total_docs: req.user.total_docs,
        login_info: true
    })
);

module.exports = router;