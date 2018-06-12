//Execute with "node dbprog.js".

//"npm audit" shows "prototype error".
//Must be fixed.

//Header File which contains different functions

var sqlite3 = require('sqlite3').verbose();

function farmer_mod(fname, lname, email, pnum, uname, passw){
    var db = new sqlite3.Database('../directory.db');
    var stmt = db.prepare("INSERT INTO farmerinfo VALUES (?,?,?,?,?,?)");
    stmt.run(fname, lname, email, pnum, uname, passw);
    stmt.finalize();
    db.close();
}

function land_mod(name, size, soiltype, owner){
    var db = new sqlite3.Database('../directory.db');
    var stmt = db.prepare("INSERT INTO landinfo VALUES (?,?,?,?)");
    stmt.run(name, size, soiltype, owner);
    stmt.finalize();
    db.close();
}

function crop_mod(name, moist, desc){
    var db = new sqlite3.Database('../directory.db');
    var stmt = db.prepare("INSERT INTO cropinfo VALUES (?,?,?)");
    stmt.run(name, moist, desc);
    stmt.finalize();
    db.close();
}

function farmer_shw(){
    var db = new sqlite3.Database('../directory.db');
    db.each("SELECT * from farmerinfo",(err, row) => {
        if (err) {
            console.error(err.message);
        }
        console.log(row.Firstname, "\t", row.Lastname, "\t", row.Email, "\t", row.Phone_No, "\t", row.Username, "\t", row.Password);
    });
    db.close();
}

function land_shw(){
    var db = new sqlite3.Database('../directory.db');
    db.each("SELECT * from landinfo",(err, row) => {
        if (err) {
            console.error(err.message);
        }
        console.log(row.Name, "\t", row.Size, "\t", row.Soil, "\t", row.Owner);
    });
    db.close();
}

function crop_shw(){
    var db = new sqlite3.Database('../directory.db');
    db.each("SELECT * from cropinfo",(err, row) => {
        if (err) {
            console.error(err.message);
        }
        console.log(row.Name, "\t", row.Moisture, "\t", row.Description);
    });
    db.close();
}

//Testing Code Beyond this point

//1, 2, 3 for DB i]p in file
if(process.argv[2] == '1'){
    farmer_mod(process.argv[3], process.argv[4], process.argv[5], process.argv[6], process.argv[7], process.argv[8]);
}
else if(process.argv[2] == '2'){
    land_mod(process.argv[3], process.argv[4], process.argv[5], process.argv[6]);
}
else if(process.argv[2] == '3'){
    crop_mod(process.argv[3], process.argv[4], process.argv[5]);
}
//4, 5, 6 for DB o/p in file
else if(process.argv[2] == '4'){
    farmer_shw();
}
else if(process.argv[2] == '5'){
    land_shw();
}
else if(process.argv[2] == '6'){
    crop_shw();
}


