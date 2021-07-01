const mysql = require('mysql');
const { connect } = require('../routes/user');


const pool = mysql.createPool({

    host:       "webcourse.cs.nuim.ie",
    user:       "u200271",
    password:   "neighutheeth3Ye3",
    database:   "cs230_u200271"
})

exports.view = (req, res) => {

    pool.getConnection((err,connection )=> {
        if(err) throw err;
        console.log('Connected')
        connection.query('SELECT * FROM ClientDetails', (err, rows)=>{
            connection.release();
            if(!err) {
                res.render('home', { rows });
            }else{
                console.log(err);
            }
            console.log('The data from user table: \n', rows);
        });
    });
}
exports.form = (req, res) => {

        res.render('add-client');
}

exports.create = (req, res) =>{

    const {id,FNAME,LNAME,MOBILE,EMAIL,ADDRESS1,ADDRESS2,TOWN,COUNTY,DOB,REFEREE} = req.body;


  pool.getConnection((err,connection )=> {
    if(err) throw err;
    console.log('Connected')

    connection.query('INSERT INTO ClientDetails SET id =?,FNAME = ?, LNAME= ?, MOBILE=?, EMAIL =?, ADDRESS1 =?,ADDRESS2=?,TOWN=?,COUNTY=?,DOB=?,REFEREE=?',[id,FNAME, LNAME,MOBILE,EMAIL,ADDRESS1,ADDRESS2,TOWN,COUNTY,DOB,REFEREE], (err, rows)=>{

        connection.release();

        if(!err) {
            res.render('add-client');

        }else{
            console.log(err);
        }
        console.log('The data has been submitted successfully!');
    });
});

}

exports.form2 = (req, res) => {

    res.render('add-physio');
}

exports.create2 = (req, res) =>{

const {id,FNAME,LNAME,MOBILE,EMAIL,ADDRESS1,ADDRESS2,TOWN,COUNTY,DOB} = req.body;


pool.getConnection((err,connection )=> {
if(err) throw err;
console.log('Connected')

connection.query('INSERT INTO PhysioDetails SET id =?,FNAME = ?, LNAME= ?, MOBILE=?, EMAIL =?, ADDRESS1 =?,ADDRESS2=?,TOWN=?,COUNTY=?,DOB=?',[id,FNAME, LNAME,MOBILE,EMAIL,ADDRESS1,ADDRESS2,TOWN,COUNTY,DOB], (err, rows)=>{
    connection.release();
    if(!err) {
        res.render('add-physio');

    }else{
        console.log(err);
    }
    console.log('The data has been submitted successfully!');
    });
});
}
exports.form3 = (req, res) => {

    res.render('add-session');
}

exports.create3 = (req, res) =>{

const {sessionid,DATE,TIME,CLIENT,PHYSIO,FEE,DURATION,NOTES} = req.body;


pool.getConnection((err,connection )=> {
if(err) throw err;
console.log('Connected')

connection.query('INSERT INTO Session SET sessionid =?,DATE = ?, TIME= ?, CLIENT=?, PHYSIO =?, FEE =?,DURATION=?,TYPE=?,NOTES=?',[sessionid,DATE,TIME,CLIENT,PHYSIO,FEE,DURATION,NOTES], (err, rows)=>{
    connection.release();
    if(!err) {
        res.render('add-session');

    }else{
        console.log(err);
    }
    console.log('The data has been submitted successfully!');

    });
});
}
exports.delete = (req, res) =>{
    pool.getConnection((err, connection)=>{

        if(err) throw err;
        console.log('Connected');

        connection.query('DELETE FROM ClientDetails WHERE id =?',[req.params.id], (err, rows) =>{

            connection.release();
            if(!err){
                res.redirect('/');
            }else{
                console.log(err);
            }
            console.log('Data deleted from client table');
        })
    })
}
