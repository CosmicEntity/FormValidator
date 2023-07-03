const form = document.querySelector("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordsMatch = false;

function validateForm(){
    // using Constraint API
    isValid = form.checkValidity();
    
    // Check to see if passwords Match
    if(password1El.value === password2El.value){
        passwordsMatch=true;
        password2El.style.borderColor = "green";
    }else{
        password2El.style.borderColor = "red";
        message.style.color = "red";
        messageContainer.style.borderColor = "red";
        message.textContent = "Make sure the Passwords Match.";
        return;
    }
    // If form valid and passwords match
    if(isValid && passwordsMatch)
    {
        message.style.color = "green";
        message.textContent = "Registered Successfully!";
        messageContainer.style.borderColor = "green";
    }
    
}

function submitData(){
    password2El.style.borderColor = "red";
    form.reset();
}

function processFormData(e){
    e.preventDefault();
    validateForm();
    if(isValid && passwordsMatch){
        submitData();
    }
}


// Event Listener
form.addEventListener("submit", processFormData);