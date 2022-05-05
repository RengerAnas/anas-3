


document.getElementById("click");
document.getElementById("click").addEventListener("click",show);

function show(){
    document.getElementById("pop-up").style.display = "block";
    
}

document.getElementById("b1");
document.getElementById("b1").addEventListener("click",hide);

function hide(){
    document.getElementById("pop-up").style.display = "none";
    
}


document.getElementById("b2");
document.getElementById("b2").addEventListener("click",deleted);

function deleted(){
    document.getElementById("b0").innerHTML = "Account Deleted Succecfully";
    document.getElementById("pop-up").style.display = "none";
    document.getElementById("click").style.left = "40%" ;
    
    document.getElementById("click").addEventListener("click",notshow);
    
    function notshow(){
        document.getElementById("pop-up").style.display = "none";
        
    }
}



