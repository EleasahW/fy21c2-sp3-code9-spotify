// @TODO: Make Functional Home Overlay

// 1. have an overlay that pops up on load
// statement: : when the page loads, the hidden on the homeOverlay (#home-popup) will go away.
const homeOverlay = document.querySelector('#home-popup');
console.log(homeOverlay);

window.addEventListener("load", function (){
    homeOverlay.classList.remove('hidden');
    return;
});

// 2. have an overlay that pops up on click of "log in" button on first overlay (homeOverlay)
// statement: when "log in" button is clicked, the home overlay is hidden, and the login overlay is shown.
const loginOverlay = document.querySelector('#login-popup');
const loginBtn = document.querySelector('#login-popup-portal');
const loginSubmit = document.querySelector('#login-complete');
console.log(loginOverlay);

loginBtn.addEventListener("click", ()=>{
    homeOverlay.classList.add('hidden');
    loginOverlay.classList.remove('hidden');
});

// 3. Monitor length of username
// if username is less than 7 characters, the statement is false. If password is more than 7 characters, it is true.
const username = document.querySelector('#username')
console.log(username);
/*document.getElementById('username').addEventListener('change', ()=>{

});*/

username.addEventListener('change', ()=>{
    if (username.length < 8) {
        alert('minimum length = 8');
        return false;
    } else {
        return true;
        alert()
    }
 });

// 4. Monitor length of password length
// if password is less than 9 characters, the statement is false. If password is more than 9 characters, it is true.
/*
const password = document.querySelector('#password')
passwordValue.addEventListener('change', ()=>{
    if (password.value > 7) {
        return true;
    } else {
        return false;
    };
});
*/

/*function isPassword(){
  return true;
};
console.log(isPassword())
*/

// 5. all overlays off on click of log-in button
loginSubmit.addEventListener('click', ()=>{
    loginOverlay.classList.add('hidden');
    return;
});



