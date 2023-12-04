// projectJS.js

function generateMealPlan() {
    // Validate email address
    var email = document.getElementById('email').value;
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Collect user inputs
    var name = document.getElementById('name').value;
    var goal = document.getElementById('goal').value;
    var breakfast = document.getElementById('breakfast').value;
    var snack1 = document.getElementById('snack1').value;
    var lunch = document.getElementById('lunch').value;
    var snack2 = document.getElementById('snack2').value;
    var dinner = document.getElementById('dinner').value;

    // Generate new webpage with meal plan
    var mealPlanOutput = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Meal Plan</title>
            <style>
                body {
                    font-family: 'Courier New', monospace;
                    margin: 20px;
                }
            </style>
        </head>
        <body>
            <h1>Your Weekly Meal Plan</h1>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Goal for the Week:</strong> ${goal}</p>
            <h2>Meal Plan:</h2>
            <ul>
                <li><strong>Breakfast:</strong> ${breakfast}</li>
                <li><strong>Snack 1:</strong> ${snack1}</li>
                <li><strong>Lunch:</strong> ${lunch}</li>
                <li><strong>Snack 2:</strong> ${snack2}</li>
                <li><strong>Dinner:</strong> ${dinner}</li>
            </ul>
        </body>
        </html>
    `;

    // Open a new window and write the meal plan
    var mealPlanWindow = window.open();
    mealPlanWindow.document.write(mealPlanOutput);
}

function clearForm() {
    // Reset all form fields
    document.getElementById('mealForm').reset();
}

function isValidEmail(email) {
    // Basic email validation using a regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
