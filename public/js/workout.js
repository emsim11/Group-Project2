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