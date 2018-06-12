//Execute with "node dbprog.js".

//"npm audit" shows "prototype error".
//Must be fixed.

//Run once to create the databases. Need not be run multiple times.

var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('../directory.db');

db.serialize(() => {
    db.run(`CREATE TABLE farmerinfo (
        Firstname text,
        Lastname text,
        Email text,
        Phone_No text,
        Username text,
        Password text
        )`);

    db.run(`CREATE TABLE landinfo (
        Name text,
        Size text,
        Soil_Type text,
        Owner text
        )`);

    db.run(`CREATE TABLE cropinfo (
        Name text,
        Moisture_Req text,
        Description text
        )`);
});

db.close()
