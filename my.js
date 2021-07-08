// Pseudo code

// 1 Make home-popup pop up in center
// 1. connect home-popup w/ console
const homeOverlay = document.querySelector('#home-popup');
console.log(homeOverlay);


// 2. have an overlay that pops up on load
document.getElementById(homeOverlay).addEventListener("load", homeOverlayOn);

function homeOverlayOn() {
    document.getElementById(homeOverlay).style.display = "block";

}

// 3. connect login-popup w/ console
/*const loginOverlay = document.querySelector('#login-popup');
console.log(loginOverlay);*/


// 4. have an overlay that pops up on click on button


// 5. Check if input box length is correct

// 6. have both overlays off on click of log-in button

/*function off() {
    document.getElementById(homeOverlay).style.display = "none";
}*/


