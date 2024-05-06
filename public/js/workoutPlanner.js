// DOM Element References
const ErrorMessageEl = document.getElementById('Error-Message');
const selectWorkoutForm = document.querySelector('.Select-Form');
const CategoryBtn = document.querySelector('.Category-Button');
const ExerciseBtn = document.querySelector('.Exercise-Button');
const CategoryBtnContainer = document.getElementById('Category-Button')
const ExerciseBtnContainer = document.getElementById('Exercise-Button');
const CategoriesChoicesList = document.getElementById('Categories-Choices');
const ExerciseChoicesList = document.getElementById('Exercise-Choices');
const BackToCalendarBtn = document.getElementById('Back-To-Calendar-Button');
const StartWorkoutBtn = document.getElementById('Start-Workout');

// Workout API Endpoints
var WorkoutAPIEndpoints = {
    'Category': 'http://localhost:3001/api/projects/category',
    'Equipment': 'http://localhost:3001/api/projects/equipment',
    'Exercise': 'http://localhost:3001/api/projects/exercise',
    'Muscle': 'http://localhost:3001/api/projects/muscle',
    'Rep': 'http://localhost:3001/api/projects/rep',
    'Weight': 'http://localhost:3001/api/projects/weight'
}

// Function: Fetch Data From a Specific Endpoint
function fetchDataFromEndpoint(endpoint) {
    return fetch(endpoint)
    .then(response => {
        if (!response.ok) {
        throw new Error('Failed to Fetch Data');
    }
    return response.json();
    })
    .catch(error => {
    console.error(`Error Fetching Data from ${endpoint}:`, error);
    throw error;
    });
}

// Function: Show/Hide Error Message
const showFetchErrorMessage = (error) => {
    ErrorMessageEl.textContent = 'An error occurred: ' + error.message;
    ErrorMessageEl.style.display = 'block';
    console.error('Error Fetching Data:', error);
}

const hideFetchErrorMessage = () => {
    ErrorMessageEl.textContent = '';
    ErrorMessageEl.style.display = 'none';
}

// Functions: Fetch API Data From Endpoints
const Exercises = () => {
    return fetchDataFromEndpoint(WorkoutAPIEndpoints.Exercise);
};

const Categories = () => {
    return fetchDataFromEndpoint(WorkoutAPIEndpoints.Category);
};

const ExerciseCategories = async (category) => {
    const EncodedCategory = encodeURIComponent(category);
    const ExerciseCategory = `http://localhost:3001/api/projects/exercise?category=${EncodedCategory}`;

    try {
        const ExerciseCategoriesData = await fetch(ExerciseCategory).then(res => res.json());
        const CategoryNames = ExerciseCategoriesData.map(category => category.name);
        displayExerciseData(CategoryNames);
        hideFetchErrorMessage();
    } catch (error) {
        console.error('Error Fetching Exercises by Category:', error);
        showFetchErrorMessage(error);
    }
};

const fetchExercisesForCategory = (selectedCategory) => {
    return async () => {
        try {
            const CategoryNames = await ExerciseCategories(selectedCategory);
            displayExerciseData(CategoryNames);
            hideFetchErrorMessage;
        } catch (error) {
            console.error('Error Fetching Exercises by Category:', error);
            showFetchErrorMessage(error);
        }
        CategoriesChoicesList.innerHTML = '';
    };
};

// Functions: Categories List
CategoryBtn.addEventListener('click', async () => {
    console.log('CategoryBtn was clicked!');
    try {
        const CategoryData = await Categories();
        displayCategoryData(CategoryData);
        hideFetchErrorMessage();
    } catch (error) {
        console.error('Error Fetching Categories:', error);
        showFetchErrorMessage(error);
    }
});

const displayCategoryData = (data) => {
    console.log('Displaying Category Data:', data);
    CategoriesChoicesList.innerHTML = '';
    
    data.category.forEach(category => {
        const CategoryChoicesBtn = document.createElement('button');
        CategoryChoicesBtn.textContent = category.name;
        CategoryChoicesBtn.classList.add('Category-Buttons');
        CategoryChoicesBtn.addEventListener('click', () => {
            console.log('CategoryChoicesBtn was clicked!');
            fetchExercisesForCategory(category.name)();
        });
        CategoriesChoicesList.appendChild(CategoryChoicesBtn);
    });
};

const CategoryButtons = (data) => {
    document.body.querySelectorAll('.Category-Buttons').forEach(button => button.remove());
    data.forEach(category => {
        const CategoryChoicesBtn = document.createElement('button');
        CategoryChoicesBtn.textContent = category.name;
        CategoryChoicesBtn.addEventListener('click', fetchExercisesForCategory(category));
        document.body.appendChild(CategoryChoicesBtn);
    });
};

// Functions: Exercise List
const ExerciseButtons = (data) => {
    document.body.querySelectorAll('.Exercise-Buttons').forEach(button => button.remove());
    data.forEach(exercise => {
        const ExerciseChoicesBtn = document.createElement('button');
        ExerciseChoicesBtn.textContent = exercise.name;
        ExerciseChoicesBtn.addEventListener('click', )
    })
}

const displayExerciseData = (data) => {
    console.log('Displaying Exercises:', data);
    ExerciseChoicesList.innerHTML = '';

    data.forEach((exercise) => {
        const ExerciseChoicesBtn = document.createElement('button');
        ExerciseChoicesBtn.textContent = exercise.name;
        ExerciseChoicesBtn.classList.add('Exercise-Buttons');
        ExerciseChoicesBtn.addEventListener('click', () => {
            console.log('ExerciseBtn was clicked!');
            fetchExercisesForCategory(exercise.name)();
        });
        ExerciseChoicesList.appendChild(ExerciseChoicesBtn)
    })
    CategoryBtnContainer.display = 'none';
    ExerciseBtnContainer.display = 'block';
};

// Functions: Back to Homepage
BackToCalendarBtn.addEventListener('click', function() {
    window.location.href = '/homepage';
});