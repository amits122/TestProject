var sqlite3 = require('sqlite3').verbose();

function login(){
    var db = new sqlite3.Database('./directory.db');
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    db.all("SELECT Username,Password FROM farmerinfo", (err, rows) => {
        if (err){
            console.error(err.message);
        }
        else{
            rows.forEach((row) => {
                if(row.Username == username){
                    //Make sure usernames are unique
                    //Make sure to stop if possible. documentation of sqlite3 says iteration cannot be halted midway
                    if(row.Password == password){
                        document.location.href = './dashboard.html';
                        console.log("Success");
                    }
                    else{
                        console.log("Failure");
                    }
                }
                else{
                    console.log("No match");
                }
            })
        }
	});	

    /*
    db.each("SELECT * from farmerinfo",(err, row) => {
        if (err) {
            console.error(err.message);
        }
        x = [row.Username, row.Password]
        console.log(x)
        users.push(x)
        console.log
    });

    */
    db.close();
}