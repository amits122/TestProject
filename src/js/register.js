var sqlite3 = require('sqlite3').verbose();

function signup(){ 
    var db = new sqlite3.Database('./directory.db');

    var stmt = db.prepare("INSERT INTO farmerinfo VALUES (?,?,?,?,?,?)");
    
    var first_name = document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;
    var email = document.getElementById("email").value;
    var tel_num = document.getElementById("tel_num").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var con_pwd = document.getElementById("confirm_password").value;

//Check if passwords match and do other validation.Form also accepts empty strings

    stmt.run(first_name, last_name, email, tel_num, username, password);
    stmt.finalize();
    db.close();
//Display messages when its done
//The below link doesnt work when you signup with data and press the button. Check it out. Try to repair it.
    document.location = './login.html' 
}