const express = require('express');
const router = express.Router();
var mysql = require('mysql');

// MySQL connection
var pool = mysql.createPool({
    connectionLimit: 100,
    host     : process.env.DB_host,
    user     : process.env.DB_user,
    password : process.env.DB_pass,
    database : process.env.DB_name,
    debug    : false
});

// Search Users Handle
router.post("/", (req,res) => {
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err.code + ' : '+ err.sqlMessage);
            return res.redirect('/search');
        }
        
        // Use the connection
        connection.query("SELECT * FROM testing_centres WHERE state=" + "'" + req.body.states +"';" , function (error, results, fields) {
    
            // When done with the connection, release it.
            connection.release();

            if(!results.length) {
                req.flash('error_msg', 'UID does not exist. Please enter correct UID');
                return res.redirect('/search');
            }

            else {
                if (!req.user) {
                    res.render('test_details', { login_info: false, testing_details: results });
                }
                else {
                    res.render('test_details', { login_info: true, testing_details: results });
                }  
                //res.render('test_details', { testing_details : results });
            }
       
          // Don't use the connection here, it has been returned to the pool.
        });
    });
});

module.exports = router;