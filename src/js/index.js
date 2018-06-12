function log() {

    var x = document.getElementById("LGButton").innerHTML, tabcontent;

    if(x.localeCompare("Login") == 0) {
        tabcontent = document.getElementsByClassName("dispContent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
            console.log(tabcontent);
        } 
        document.getElementById("Dashboard").style.display = "block";
        document.getElementById("LGButton").innerHTML = "Logout";
        
    }

    else if(x.localeCompare("Logout") == 0) {
        tabcontent = document.getElementsByClassName("dispContent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        } 
        document.getElementById("Home").style.display = "block";
        document.getElementById("LGButton").innerHTML = "Login";
    }
    
}

document.getElementById("Home").style.display = "block";
