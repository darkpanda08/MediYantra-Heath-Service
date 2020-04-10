const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

const { ensureAuthenticated } = require('../config/auth');

// User model
const User = require('../models/User');

// Login Page
router.get('/login', (req, res) => {
    // If not logged in open welcome page
    if (!req.user) {
        res.render('login');
    } else {
        req.flash('error_msg_logged', 'You are already logged in');
        return res.redirect('/');
    }
});

// Register Page
router.get('/register', (req, res) => {
    // If not logged in open welcome page
    if (!req.user) {
        res.render('register');
    } else {
        req.flash('error_msg_logged', 'Log out to proceed with Registration');
        return res.redirect('/');
    }
}); 

// Update Data Handle
router.post('/update', ensureAuthenticated, (req, res) => {
    const { newbeds_total, newbeds_available, newtotal_docs } = req.body;
    var id = req.user._id;

    if (newbeds_total) {
        User.findOneAndUpdate({ _id: id }, { beds_total: newbeds_total }, (err, doc) => {
            if (err) {
                req.flash('error_msg', 'There is some error. PLease retry');
                return res.redirect('/account');
            }
        })
    }
    if (newbeds_available) {
        User.findOneAndUpdate({ _id: id }, { beds_available: newbeds_available }, (err, doc) => {
            if (err) {
                req.flash('error_msg', 'There is some error. PLease retry');
                return res.redirect('/account');
            }
        })
    }
    if (newtotal_docs) {
        User.findOneAndUpdate({ _id: id }, { total_docs: newtotal_docs }, (err, doc) => {
            if (err) {
                req.flash('error_msg', 'There is some error. PLease retry');
                return res.redirect('/account');
            }
        })
    }
    req.flash('success_msg', 'Details Updated Successfully');
    return res.redirect('/account');
});


// Register Handle
router.post('/register', (req, res) => {
    const { name, email, password, password2, phone, plus_code, beds_total, beds_available, total_docs } = req.body;
    let errors = [];

    // Check required fields
    if(!name || !email || !password || !password2) {
        errors.push({ msg: 'Please fill in all fields' });
    }

    // Check password match
    if (password !== password2) {
        errors.push({ msg: 'Passwords do not match' });
    }

    // Check Password Length
    if (password.length < 6) {
        errors.push({ msg: 'Password should have at least 6 characters'});        
    }

    // Check Password length is not more than 12
    if (password.length > 12) {
        errors.push({ msg: 'Password should have atmost 12 characters'});        
    }    
    
    if (errors.length > 0) {
        res.render('register', {
            errors,
            name,
            email,
            password,
            password2,
            phone,
            plus_code
        });
    } else {
        // Validation Pass
        User.findOne({ email: email })
            .then(user => {
                if (user) {
                    // User exists
                    errors.push({ msg: 'Email is already registered.'});
                    res.render('register', {
                        errors,
                        name,
                        email,
                        password,
                        password2,
                        plus_code
                    });
                } else {
                    const newUser = new User({
                        name,
                        email,
                        password,
                        phone,
                        plus_code,
                        beds_total,
                        beds_available,
                        total_docs
                    });

                    // Hash Password
                    bcrypt.genSalt(10, (err, salt) => 
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if (err) throw err;                              
                            // Set password to hashed
                            newUser.password = hash;
                            // Save User
                            newUser.save()
                                .then(user => {
                                    req.flash('success_msg', 'You are now registered and can now log in');
                                    res.redirect('/users/login');
                                })
                                .catch(err => console.log(err));
                    }))
                }
            });
    }

});

// Deactivate Account Handle
router.get('/deactivate', ensureAuthenticated, (req, res) => {
    var id = req.user._id;

    User.findOneAndRemove({ _id: id }, (err, doc) => {
        if (err) {
            console.log(err);
        } else {
            req.flash('success_msg', 'Account Successfully Deactivated. Thanks for giving us try !!');
            return res.redirect('../');
        }
    })
});

// Login Handle
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next);    
});

// Logout Handle
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are successfully logged out');
    res.redirect('/')
})

module.exports = router;