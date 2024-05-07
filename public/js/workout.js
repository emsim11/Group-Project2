// DOM Element References
const HomeBtn = document.getElementById('Return-To-Homepage');

// Functions: Return to Homepage
HomeBtn.addEventListener('click', function() {
    window.location.href = '/homepage';
});

// TODO: Consider Changing Timer So That Start and Stop Buttons Handle Begin/End
// TODO: Add in API Script for Genesis Google API
// TODO: Review Code to Make Sure it Applies and Functions as Expected

document.addEventListener('DOMContentLoaded', function () {
    var mainContent = document.getElementById('mainContent');
    var workoutPlanner = document.getElementById('workoutPlanner');
    startWorkoutButton.addEventListener('click', function () {
        mainContent.style.display = 'none';
        workoutPlanner.style.display = 'block';
        setInterval(setTime, 1000);
    });
});

// Workout Timer That Begins When "Begin Workout" is Clicked
var minutesLabel = document.getElementById("minutes")
var secondsLabel = document.getElementById("seconds")
var totalSeconds = 0;

function setTime() {
    ++totalSeconds
    secondsLabel.innerHTML = pad(totalSeconds % 60)
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
};

function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString
    }
};
// Function: Display Workout Message Based On Workout Choice Made By User
const workoutChoicesCategories = document.querySelectorAll('.Category-Choices li'); // Get List of Workout Choices
workoutChoicesCategories.forEach(item => { // Add Click Event Listener to Each List Item
    item.addEventListener('click', function () {
        const selectedCategory = item.textContent.trim(); // Get Text Content of Clicked Item
        console.log(selectedCategory);
        const workoutMessage = document.getElementById('workoutMessage'); // Update Workout Message Based On Selected Workout Category
        switch (selectedCategory) {
            case 'Complete Arm Workout':
                workoutMessage.textContent = 'Today is Arm Day - Get those biceps pumping!';
                break;
            case 'Leg Workout':
                workoutMessage.textContent = 'Today is Leg Day - Strengthen those legs!';
                break;
            case 'Calves Workout':
                workoutMessage.textContent = 'Today is Calves Day - Tone those calves!';
                break;
            case 'Upper Body Workout':
                workoutMessage.textContent = 'Today is Upper Body Day - Build a strong upper body!';
                break;
            case 'Back Workout':
                workoutMessage.textContent = 'Today is Back Day - Strengthen your back!';
                break;
            case 'Shoulder Workout':
                workoutMessage.textContent = 'Today is Shoulder Day - Bulk up your shoulders!';
                break;
            case 'Ab Workout':
                workoutMessage.textContent = 'Today is Ab Day - Work on those core muscles!';
                break;
            case 'Cardio Workout':
                workoutMessage.textContent = 'Today is Cardio Day - Get your heart pumping with these cardio workouts!';
                break;
            case 'Rest Day':
                workoutMessage.textContent = 'Today is Rest Day - Relax, recover, and reward yourself!';
                break;
            default:
                workoutMessage.textContent = 'Your Workout List:';
        };
    });
});



const API_KEY = 'AIzaSyDM9h_H6uJNcWntAN4e30DTWXICQr-NggI';

import { GoogleGenerativeAI } from "@google/generative-ai";
// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);

const userInput = document.getElementById('User-Input');
const searchButton = document.getElementById('Search-Button');
const resultsDiv = document.getElementById('Results');

async function run() {
    console.log("Showing a workout");
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const prompt = "show a workout";
  
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

          // Display the generated text in the results div
        const resultElement = document.createElement('div');
        resultElement.classList.add('AIdiv')
        resultElement.innerHTML = `<p>${text}</p>`;
        resultsDiv.innerHTML = ''; // Clear previous results
        resultsDiv.appendChild(resultElement);
    }

run();
