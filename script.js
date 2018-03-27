function submitForm(){
    var noErrors=true;
    var errors = document.getElementById("errors");
    while (errors.firstChild) {
    errors.removeChild(errors.firstChild);
}
    var error = document.getElementById("error-text");
    if(document.getElementById("username").value.length < 5){
        var div = document.createElement("div");
        var text = document.createTextNode("Username must be 5 characters or more");
        div.appendChild(text);
        errors.appendChild(div);
        noErrors=false;
    }
     if(document.getElementById("password1").value.length<6){
        var div = document.createElement("div");
        var text = document.createTextNode("Password must be 6 characters or more");
        div.appendChild(text);
        errors.appendChild(div);
        noErrors=false;
    }
     if(document.getElementById("password1").value != document.getElementById("password2").value){
        var div = document.createElement("div");
        var text = document.createTextNode("Passwords do not match!");
        div.appendChild(text);
        errors.appendChild(div);
        noErrors=false;
     }
     if(document.getElementById("telephone").value.length>15){
        var div = document.createElement("div");
        var text = document.createTextNode("Telephone cannot exceed 15 numbers!");
        div.appendChild(text);
        errors.appendChild(div);
        noErrors=false;
    }
    if(noErrors) {
        var div = document.createElement("div");
        var text = document.createTextNode("Great job!");
        div.appendChild(text);
        div.style.color = "green";
        errors.appendChild(div);
    }
}

document.getElementById("submit-button").onclick = submitForm;

