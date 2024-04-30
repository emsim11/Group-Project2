/* Repetition Units, Weight Units */
DROP DATABASE IF EXISTS workout_api;
CREATE DATABASE workout_api;

\c workout_api;

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    category_name VARCHAR(50) UNIQUE
);

CREATE TABLE muscles (
    id SERIAL PRIMARY KEY,
    muscle_name VARCHAR(50) UNIQUE,
    muscle_name_en VARCHAR(50),
    is_front BOOLEAN NOT NULL,
    muscle_image NOT NULL,
);

CREATE TABLE equipment (
    id SERIAL PRIMARY KEY,
    equipment_name VARCHAR(50) UNIQUE,
);

CREATE TABLE exercises (
    id SERIAL PRIMARY KEY,
    exercise_name VARCHAR(50) UNIQUE,
    exercise_description VARCHAR(255) NOT NULL,
    exercise_image,
    
    /* Category */
    FOREIGN KEY (category_name)
    REFERENCES categories(name)

    /* Muscle(s) */
    FOREIGN KEY (muscle_name)
    REFERENCES muscles(name)

    /* Equipment */
    FOREIGN KEY (equipment_name)
    REFERENCES equipment(name)
);