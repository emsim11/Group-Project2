// Feature: Display User's Name in Heading 1
var header = document.querySelector('h1');
var userInput = document.getElementById('userInput');
var workoutPage = document.getElementById('Workout-Page');
var welcomeMessage = document.getElementById('Welcome');
var previousArrow = document.getElementById("cal-prev");
var nextArrow = document.getElementById("cal-next")
var userName = localStorage.getItem('userName'); // Check if User Name is Already Stored in Local Storage

// Function: Retrieve User Name if it's Been Submitted Before
if (userName) {
    header.textContent = `${userName}'s Workout Tracker`; // If User Name is Already Stored, Update Header With the Stored Name
    workoutPage.style.display = 'block'; // Show the Workout Page Divider
    userInput.style.display = 'none'; // Hide the User Name Form
    welcomeMessage.style.display = 'block'; // Show the Welcome Message

    // Function: Submit User Name For the First Time
} else {
    userInput.addEventListener('submit', function (event) { // Add Event Listener to Form
        event.preventDefault(); // Prevent Form Submission
        var userName = document.getElementById('User-Name').value; // Retrieve Input Value From Form Field
        header.textContent = `${userName}'s Workout Tracker`; // Update Text Content of Header with the User's Name
        localStorage.setItem('userName', userName); // Save the User's Name to Local Storage
        workoutPage.style.display = 'block'; // Show the Workout Page Divider
        userInput.style.display = 'none'; // Hide User Name Form Once Submitted
        welcomeMessage.style.display = 'none'; // Hide the Welcome Message
    });
};