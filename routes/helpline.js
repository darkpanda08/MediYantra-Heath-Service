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

// Helpline Page
router.get("/", (req,res) => {    
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