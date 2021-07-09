// Pseudo code

// Goal: Make Functional Home Overlay
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
/*document.getElementById('username').value.addEventListener('change', (evt)=>{
    console.log(Boolean(username.value));
    if (username.value > 7)
});*/
username.addEventListener('change', (evt)=> {
    console.log(evt);
    if (username.value > 7) {
        return true;
    } else {
        return false;
    };
});

// document.querySelector('#form').addEventListener('submit', function (evt) {
//     evt.preventDefault()
//     console.log(username.value);
// });

//    if username is larger than 6 characters, it is true. If else, it is false.

// 4. Monitor length of password length
// if password is less than 9 characters, the statement is false. If password is more than 9 characters, it is true.
const password = document.querySelector('#password')
password.addEventListener('change', (evt)=>{
    console.log(evt);
});

/*function isPassword(){
  return true;
};
console.log(isPassword())
*/



// 5. Display message if box length is incorrect *bonus

// 6. all overlays off on click of log-in button
loginSubmit.addEventListener('click', function (){
    loginOverlay.classList.add('hidden');
    return;
});


/*function off() {
    document.getElementById(homeOverlay).style.display = "none";
}*/


