const express = require('express');
const router = express.Router();
var mysql = require('mysql');

const { ensureAuthenticated } = require('../config/auth');

// User model
const User = require('../models/User');

// MySQL connection
var pool = mysql.createPool({
    connectionLimit: 100,
    host     : process.env.DB_host,
    user     : process.env.DB_user,
    password : process.env.DB_pass,
    database : process.env.DB_name,
    debug    : false
});

// Welcome Page
router.get('/', function (req, res) {
    if (!req.user) {
        res.render('dashboard', { login_info: false });
    }
    else {
        res.render('dashboard', { login_info: true });
    }
});

// Hospitals Near Me
router.get('/track', function (req,res){
    if (!req.user) {
        res.render('near_me', { login_info: false });
    }
    else {
        res.render('near_me', { login_info: true });
    }
});

// NGO
router.get('/ngo', function (req,res){
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err.code + ' : '+ err.sqlMessage);
            return res.json({"code" : 100, "status" : "Error in connection database"});
        }
        
        // Use the connection
        query = query = "SELECT * FROM ngo_details;";
        connection.query(query, function (error, results, fields) {
            
            // When done with the connection, release it.
            connection.release();

            if (!error) {   
                if (!req.user) {
                    res.render('ngo', { login_info: false, details: results });
                }
                else {
                    res.render('ngo', { login_info: true, details: results });
                }             
            }

            // Handle error after the release.
            else {
                req.flash('error_msg', 'There is some error. PLease reload the page');
                return res.redirect('/');
            }
       
          // Don't use the connection here, it has been returned to the pool.
        });
    });
});

// Get data for beds
router.post('/loc', function (req,res){ 
    User.find({ plus_code: req.body.plus_code }, function(err, results){
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
        total_docs: req.user.total_docs
    })
);

// Search Page
router.get('/search', (req,res) => {
    if (!req.user) {
        res.render('search', { login_info: false });
    }
    else {
        res.render('search', { login_info: true });
    }
});

// Helpline Page
router.get("/helpline", (req,res) => {    
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err.code + ' : '+ err.sqlMessage);
            return res.json({"code" : 100, "status" : "Error in connection database"});
        }
        
        // Use the connection
        query = query = "SELECT * FROM helpline_details;";
        connection.query(query, function (error, results, fields) {
            
            // When done with the connection, release it.
            connection.release();

            if (!error) {  
                if (!req.user) {
                    res.render('helpline', { login_info: false, details: results });
                }
                else {
                    res.render('helpline', { login_info: true, details: results });
                }                
            }

            // Handle error after the release.
            else {
                req.flash('error_msg', 'There is some error. PLease reload the page');
                return res.redirect('/');
            }
       
          // Don't use the connection here, it has been returned to the pool.
        });
    });
});

module.exports = router;