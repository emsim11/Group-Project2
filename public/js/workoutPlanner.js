// DOM Element References
const ErrorMessageEl = document.getElementById('Error-Message');
const CategoryBtn = document.querySelector('.Category-Button');
const ExerciseBtn = document.querySelector('.Exercise-Button');
const CategoryBtnContainer = document.getElementById('Category-Button')
const ExerciseBtnContainer = document.getElementById('Exercise-Button');
const CategoriesChoicesList = document.getElementById('Categories-Choices');
const ExerciseChoicesList = document.getElementById('Exercise-Choices');

// API Endpoints
var WorkoutAPIEndpoints = {
    'Category': 'http://localhost:3001/api/projects/category',
    'Equipment': 'http://localhost:3001/api/projects/equipment',
    'Exercise': 'http://localhost:3001/api/projects/exercise',
    'Muscle': 'http://localhost:3001/api/projects/muscle',
    'Rep': 'http://localhost:3001/api/projects/rep',
    'Weight': 'http://localhost:3001/api/projects/weight'
}

const ExerciseCategories = async (category) => {
    const EncodedCategory = encodeURIComponent(category);
    const ExerciseCategory = `http://localhost:3001/api/projects/exercise?category=${EncodedCategory}`;

    try {
        const ExerciseCategoriesData = await fetch(ExerciseCategory).then(res => res.json());
        displayExerciseData(ExerciseCategoriesData);
        hideFetchErrorMessage();
    } catch (error) {
        console.error('Error Fetching Exercises by Category:', error);
        showFetchErrorMessage(error);
    }
};

const ExerciseEquipment = async (equipment) => {
    const EncodedEquipment = encodeURIComponent(equipment);
    const ExerciseEquipment = `http://localhost:3001/api/projects/exercise?equipment=${EncodedEquipment}`;

    try {
        const ExerciseEquipmentData = await fetch(ExerciseEquipment).then(res => res.json());
        // displayExerciseData(ExerciseEquipmentData);
        hideFetchErrorMessage();
    } catch (error) {
        console.error('Error Fetching Exercises by Equipment:', error);
        showFetchErrorMessage(error);
    }
};

const ExerciseMuscles = async (muscle) => {
    const EncodedMuscle = encodeURIComponent(muscle);
    const ExerciseMuscle = `http://localhost:3001/api/projects/exercise?muscle=${EncodedMuscle}`;
    
    try {
        const ExerciseMuscleData = await fetch(ExerciseMuscle).then(res => res.json());
        // displayExerciseData(ExerciseMuscleData);
        hideFetchErrorMessage();
    } catch (error) {
        console.error('Error Fetching Exercises by Muscle:', error);
        showFetchErrorMessage(error);
    }
};

// Fetch Functions
const fetchDataFromEndpoint = (endpoint) => {
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
};

const showFetchErrorMessage = (error) => {
    ErrorMessageEl.textContent = 'An error occurred: ' + error.message;
    ErrorMessageEl.style.display = 'block';
    console.error('Error Fetching Data:', error);
}

const hideFetchErrorMessage = () => {
    ErrorMessageEl.textContent = '';
    ErrorMessageEl.style.display = 'none';
}

const Exercises = () => {
    return fetchDataFromEndpoint(WorkoutAPIEndpoints.Exercise);
};

const Categories = () => {
    return fetchDataFromEndpoint(WorkoutAPIEndpoints.Category);
};

const Equipment = () => {
    return fetchDataFromEndpoint(WorkoutAPIEndpoints.Equipment);
};

const Muscles = () => {
    return fetchDataFromEndpoint(WorkoutAPIEndpoints.Muscle);
};

const Reps = () => {
    return fetchDataFromEndpoint(WorkoutAPIEndpoints.Rep);
};

const Weights = () => {
    return fetchDataFromEndpoint(WorkoutAPIEndpoints.Weight);
};

const fetchExercisesForCategory = (selectedCategory) => {
    return async () => {
        try {
            const ExerciseCategoryData = await ExerciseCategories(selectedCategory);
            displayExerciseData(ExerciseCategoryData);
            hideFetchErrorMessage;
        } catch (error) {
            console.error('Error Fetching Exercises by Category:', error);
            showFetchErrorMessage(error);
        }
        CategoriesChoicesList.innerHTML = '';
    };
};

const fetchExercisesForEquipment = (selectedEquipment) => {
    return () => {
        ExerciseEquipment(selectedEquipment);
    };
};

const fetchExercisesForMuscle = (selectedMuscle) => {
    return () => {
        ExerciseMuscles(selectedMuscle);
    };
};

// Event Listeners
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

const CategoryButtons = (data) => {
    document.body.querySelectorAll('.Category-Buttons').forEach(button => button.remove());
    data.forEach(category => {
        const CategoryChoicesBtn = document.createElement('button');
        CategoryChoicesBtn.textContent = category.name;
        CategoryChoicesBtn.addEventListener('click', fetchExercisesForCategory(category));
        document.body.appendChild(CategoryChoicesBtn);
    });
};

const ExerciseButtons = (data) => {
    document.body.querySelectorAll('.Exercise-Buttons').forEach(button => button.remove());
    data.forEach(exercise => {
        const ExerciseChoicesBtn = document.createElement('button');
        ExerciseChoicesBtn.textContent = exercise.name;
        ExerciseChoicesBtn.addEventListener('click', )
    })
}
// Display Functions
const displayCategoryData = (data) => {
    console.log('Displaying Category Data:', data);
    CategoriesChoicesList.innerHTML = '';
    
    data.forEach(category => {
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