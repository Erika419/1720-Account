// Grab references to sign up form
const signup = document.querySelector("#signup");
const submitBtn = document.querySelector("#signup input[type=submit]");

//Grab references to the delete local storage
const display = document.querySelector("display");
const details = document.querySelector("#display div");
const deleteBtn = document.querySelector("#display>button"); 

//Check if local data storage already exists
const myaccount = localStorage.getItem("ly-Name");

if(myaccount === null){
    signup.classList.remove("hide");
    display.classList.add("hide");
} else{

}