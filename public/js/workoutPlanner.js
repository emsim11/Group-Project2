// Feature: Display Workout Choices
var exeButton = $(".exerciseButton").on("click", function () {
    $(".workoutChoices").css("visibility", "visible")
});

{
    document.addEventListener("DOMContentLoaded", function () {
        const exerciseListButtons = document.querySelectorAll('.workoutChoices li');
        const selectWorkoutForm = document.querySelector('.selectForm');
        const exercisesCheckboxContainer = document.querySelector('.checkboxContainer');
        const exerciseList = document.querySelector("#exercise");
        const exerciseHeadingButton = document.querySelector('.Checkbox-Heading');
        const formInstructions = document.querySelector('.Form-Instructions');
        console.log(exerciseHeadingButton);

        // Function: Make "Exercises:" Heading in Checkbox Container On Click Go Back to Workout Choices
        exerciseHeadingButton.addEventListener('click', function () {
            console.log("Exercise heading button clicked.");
            selectWorkoutForm.style.display = 'block'; // Show the Select Form
            exercisesCheckboxContainer.style.display = 'none'; // Hide the Exercise List
        });
        var clonedExerciseListItem; // Declare Variable Outside Event Listener

        // Function: Display Exercise List With Checkboxes When a Workout Choice is Made in WorkoutChoices Menu
        exerciseListButtons.forEach(function (button) {
            button.addEventListener('click', function (event) {
                console.log(event.target.dataset.category);
                document.querySelector('.workoutChoices').style.visibility = 'hidden'; // Hide the Workout Types List
                exercisesCheckboxContainer.style.visibility = 'visible'; // Show the Checkbox Container
                selectWorkoutForm.style.display = 'none'; // Hide Select Form
                exercisesCheckboxContainer.style.display = 'block'; // Show Checkbox Container
                fetchDataFromEndpoint("exercise", "category=" + event.target.dataset.category).then(function (response) { // Populate Checkbox Container With Relevant Workouts
                    var exercises = response.results;
                    console.log(exercises);
                    for (let i = 0; i < exercises.length; i += 1) {
                        let exercise = exercises[i];
                        console.log(exercise);
                        let exerciseListItem = document.createElement("li");
                        let exerciseListItemBox = document.createElement("input");
                        exerciseListItemBox.setAttribute("type", "checkbox"); // Set Type Attribute For Checkbox
                        exerciseListItemBox.setAttribute("value", exercise.name); // Set Value Attribute For Checkbox
                        exerciseListItem.appendChild(exerciseListItemBox); // Append Checkbox to List Item

                        // Function: Closure to Capture Correct Exercise Item
                        (function (exerciseItem) {
                            clonedExerciseListItem;
                            var userExerciseList = document.getElementById('exerciseList');
                            exerciseListItemBox.addEventListener('change', function () {

                                // Function: Add Selected Exercises to Workout Planner exerciseList
                                if (exerciseListItemBox.checked) {
                                    console.log(exerciseListItemBox);
                                    var exerciseListItemWithoutCheckbox = document.createElement('li');
                                    var exerciseNameWithoutCheckbox = document.createTextNode(exercise.name);
                                    exerciseListItemWithoutCheckbox.appendChild(exerciseNameWithoutCheckbox);

                                    // Function: Create a Text Input For Entering Time or Reps For Each Selected Exercise
                                    var timeRepsInput = document.createElement('input');
                                    timeRepsInput.setAttribute('type', 'text');
                                    timeRepsInput.setAttribute('placeholder', 'Time/Reps');

                                    // Function: Create a Checkbox For Completion Status For Each Selected Exercise
                                    var completionCheckbox = document.createElement('input');
                                    completionCheckbox.setAttribute('type', 'checkbox');
                                    completionCheckbox.setAttribute('id', 'completionCheckbox');
                                    var completionLabel = document.createElement('label');
                                    completionLabel.setAttribute('for', 'completionCheckbox');
                                    completionLabel.textContent = "Completed";

                                    // Functiion: Append Input and Checkbox Elements to the Workout Planner
                                    exerciseListItemWithoutCheckbox.appendChild(timeRepsInput);
                                    exerciseListItemWithoutCheckbox.appendChild(completionCheckbox);
                                    exerciseListItemWithoutCheckbox.appendChild(completionLabel);
                                    userExerciseList.appendChild(exerciseListItemWithoutCheckbox); // Append Exercise Name Without Checkbox to Workout Planner

                                } else {
                                    if (clonedExerciseListItem) {
                                        clonedExerciseListItem.remove(); // Remove exerciseListItem From the workoutPlanner if the Checkbox is Unchecked
                                    }
                                };
                            });
                        })(exercise);

                        var exerciseName = document.createTextNode(exercise.name); // Create Text Node For Exercise Name
                        exerciseListItem.appendChild(exerciseName); // Append Exercise Name to List Item
                        exerciseList.appendChild(exerciseListItem); // Append List Item to Exercise List
                    };
                    formInstructions.style.display = 'none'; // Hide Form Instructions Once the Checkbox Items Have Appeared


                });
            });
        });

        // Function: Use the "Exercise" Button to Go Back to Exercise Types
        const checkboxHeadingButton = document.getElementById('checkbox-heading-button');
        if (checkboxHeadingButton) {
            checkboxHeadingButton.addEventListener('click', () => {
                const selectWorkoutForm = document.querySelector('.selectForm');
                if (selectForm) {
                    selectWorkoutForm.scrollIntoView({ behavior: 'smooth' });
                };
            });
        }
    });
};