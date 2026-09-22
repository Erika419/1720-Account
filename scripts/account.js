// Grab references to sign up form
const signup = document.querySelector("#signup");
const submitBtn = document.querySelector("#signup input[type=submit]");
submitBtn.addEventListener('click', createProfile);

//Grab references to the delete local storage
const display = document.querySelector("#display");
const details = document.querySelector("#display div");
const deleteBtn = document.querySelector("#display > button"); 
deleteBtn.addEventListener("click", deleteProfile);

//Check if local data storage already exists
const myaccount = localStorage.getItem("ly-Name");

if(myaccount === null){
    signup.classList.remove("hide");
    display.classList.add("hide");
} else{
    signup.classList.add("hide");
    signup.classList.remove("hide")
}

//Funtion to create a new profile
function createProfile(){
    console.log("You created a new Profile")
}

//Funtion to delete a new profile
function deleteProfile(){
    console.log("You DELETED a Profile")
}
