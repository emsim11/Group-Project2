// TODO: Consider Changing Timer So That Start and Stop Buttons Handle Begin/End
// TODO: Add in API Script for Genesis Google API
// TODO: Review Code to Make Sure it Applies and Functions as Expected

document.addEventListener('DOMContentLoaded', function () {
    var startWorkoutButton = document.getElementById('startWorkout');
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