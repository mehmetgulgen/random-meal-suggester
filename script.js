// Define a list of meals
const meals = ["Pizza", "Burger", "Salad", "Pasta", "Sushi", "Tacos", "Chicken Stir-fry", "Soup", "Sandwich", "Curry", "Steak", "Fish and Chips"];

// Get references to HTML elements
const suggestButton = document.getElementById("suggestButton");
const mealDisplay = document.getElementById("mealDisplay");

// Function to select and display a random meal
function suggestRandomMeal() {
    // Select a random meal
    const randomIndex = Math.floor(Math.random() * meals.length);
    const selectedMeal = meals[randomIndex];

    // Show it on the screen
    mealDisplay.textContent = selectedMeal;
}

// Add event listener to the button
// Wait for user to click
// IF user clicks the button THEN pick a random meal ELSE do nothing
suggestButton.addEventListener("click", suggestRandomMeal);