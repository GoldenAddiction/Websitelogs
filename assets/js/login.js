"use strict";
document.addEventListener("DOMContentLoaded", init);


function  init(){
    console.log("Connectie geslaagd");
   document.querySelector("#login").addEventListener("click" , checklogin);

}
function checklogin(e) {
    e.preventDefault();
    let data = fetch
    let username = document.getElementById('username').value;
    let password =  document.getElementById('password').value;

    fetch('users.json').then(response => {
        return response.json();
    }).then(data => {
        // Work with JSON data here
        console.log(data);
    }).catch(err => {
        // Do something for an error here
    });



}