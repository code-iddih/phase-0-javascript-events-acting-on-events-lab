// Your code here

// !!==========================PRACTICE======================!!

// Grabbing Dodger and saving it in a variable

// const dodger = document.getElementById("dodger");

// // Changing the color to black

// dodger.style.backgroundColor = "#000000";

// Moving the Dodger Up by 100px

// dodger.style.bottom = "100px";

// // Returning it to its Default Position From Bottom

// dodger.style.bottom = "0px";

// // Taking it to the far Left

// dodger.style.left = "0px";

// !!==========================LAB======================!!

const dodger = document.getElementById('dodger');

// // Changing the color to Pinkish

dodger.style.backgroundColor = "#FF69B4";

// Listening if User is Keying Down Left / Right Arrow
document.addEventListener("keydown", function(event) {

  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});

// Function to move the dodger to the left
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", ""); // Removes the "px" unit from the value returned 
  // Converts into an Integer (Numerical base - Decimal)
  const left = parseInt(leftNumbers, 10); 

  // Check if the left movement is within bounds
  if (left > 0) {
    // Move dodger 1 pixel to the left
    dodger.style.left = `${left - 1}px`;
  }
}

// Function to move the dodger to the right
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", ""); // Removes the "px" unit from the value returned 
  // Converts into an Integer (Numerical base - Decimal)
  const left = parseInt(leftNumbers, 10);

  // Check if Right Movement is within bounds
  if (left < 360) { 
    // Move dodger 1 pixel to the right
    dodger.style.left = `${left + 1}px`; 
  }
}