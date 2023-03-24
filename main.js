// This script is for 

/**
 * Let's start with the global variables
 */
// The input data from the user
const name = document.getElementById('name-input');
const age = document.getElementById('age-input');
const game = document.getElementById('game-input');
const time = document.getElementById('time-input');

// The checked-boxes
const checkboxes = document.getElementsByClassName('checkboxes');

/**
 * End with Global variables
 */

// To make sure you have selected one of the two options
// Do you want to share your name?
// Yes || No 

/**
 * This function is from:
 * https://stackoverflow.com/questions/38806122/how-to-only-have-one-checkbox-checked-at-a-time
 * 
 */
function check(input) {

    for (let i=0; i < checkboxes.length; i++) {
        // uncheck all 
        if (checkboxes[i].checked == true) {
            checkboxes[i].checked = false;
        }
    };
        // Set checked of clicked boxes
        if (input.checked == true) {
            input.checked = false;
        } else {
            input.checked = true;
        }
};

// let's create a function to hold all of the data
function userInfo () {
    console.log(name.value);
        
}