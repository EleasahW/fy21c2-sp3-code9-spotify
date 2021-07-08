// Pseudo code

// Goal: Make Functional Home Overlay
// 1. connect home-popup w/ console
const homeOverlay = document.querySelector('#home-popup');
console.log(homeOverlay);

// 2. have an overlay that pops up on load: when the page loads, the hidden on the homeOverlay (#home-popup) will go away.
window.addEventListener("load", function (){
    homeOverlay.classList.remove('hidden');
    });

// 3. connect login-popup w/ console
const loginOverlay = document.querySelector('#login-popup');
console.log(loginOverlay);

const loginBtn = document.querySelector('#login-popup-portal')

loginBtn.addEventListener("click", function (){
    homeOverlay.classList.add('hidden');
    loginOverlay.classList.remove('hidden');
});

// 4. have an overlay that pops up on click on button


// 5. Check if input box length is correct

// 6. have both overlays off on click of log-in button

/*function off() {
    document.getElementById(homeOverlay).style.display = "none";
}*/


