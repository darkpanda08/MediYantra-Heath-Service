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


// Doc Finding Handle
router.get("/", (req,res) => {
    var doc_id = parseInt(req.query.uid);
    
    if (Number.isInteger(doc_id)) {
        pool.getConnection(function(err, connection) {
            if (err) {
                console.log(err.code + ' : '+ err.sqlMessage);
                return res.redirect('/');
            }
    
            query = "SELECT * FROM helpline_details WHERE uid = " + doc_id + ";"
            
            // Use the connection
            connection.query(query, function (error, results, fields) {
                
                // When done with the connection, release it.            
                connection.release();
    
                if (!results.length) {
                    req.flash('error_msg', 'PLease try again.');
                    return res.redirect('/');
                } 
                
                else {     
                    if (!req.user) {
                        res.render('doc', { login_info: false, doc_details: results });
                    }
                    else {
                        res.render('doc', { login_info: true, doc_details: results });
                    }                  
                    //res.render('doc', { doc_details: results });
                }
           
              // Don't use the connection here, it has been returned to the pool.
            });
        });
    }

    else {
        req.flash('error_msg', 'Please try again');
        return res.redirect('/');
    }
});


module.exports = router;