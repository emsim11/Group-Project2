/* Categories Table */
INSERT INTO categories (category_name)
VALUES ('Abs'),
('Arms'),
('Back'),
('Calves'),
('Cardio'),
('Chest'),
('Legs'),
('Shoulders');

/* Equipment Table */
INSERT INTO equipment (equipment_name)
VALUES ('Barbell'),
('Bench'),
('Dumbbell'),
('Exercise Ball'), /* 'Swiss Ball' */
('Gym Mat'),
('Incline Bench'),
('Kettlebell'),
('Pull-Up Bar'),
('SZ-Bar'),
('None (Bodyweight Exercise)');

/* Muscles Table */
INSERT INTO muscles (muscle_name, muscle_name_en, is_front, muscle_image)
VALUES ('Anterior Deltoid', 'Shoulders', true, '../Assets/Images/muscles/shoulders.svg'),
('Biceps Brachii', 'Biceps', true, '../Assets/Images/muscles/biceps.svg'),
('Biceps Femoris', 'Hamstrings', false, '../Assets/Images/muscles/hamstrings.svg'),
('Brachialis', NULL, true, '../Assets/Images/muscles/upper-arm.svg'),
('Gastrocnemius', 'Calves', false, '../Assets/Images/muscles/calves.svg'),
('Gluteus Maximus', 'Glutes', false, '../Assets/Images/muscles/glutes.svg'),
('Latissimus Dorsi', 'Lats', false, '../Assets/Images/muscles/lats.svg'),
('Obliquus Externus Abdominis', NULL, true, '../Assets/Images/muscles/abs-outer.svg'),
('Pectoralis Major', 'Chest', true, '../Assets/Images/muscles/chest.svg'),
('Quadriceps Femoris', 'Quads', true, '../Assets/Images/muscles/quads.svg'),
('Rectus Abdominis', 'Abs', true, '../Assets/Images/muscles/abs.svg'),
('Serratus Anterior', NULL, true, '../Assets/Images/muslces/chest-scapula.svg'),
('Soleus', NULL, false, '../Assets/Images/muscles/lower-calves.svg'),
('Trapezius', NULL, false, '../Assets/Images/muscles/traps.svg'),
('Triceps Brachii', 'Triceps', false, '../Assets/Images/muscles/triceps.svg');

/* Exercises Table */
INSERT INTO exercises (exercise_name, exercise_description, exercise_image, category_name, muscle_name, equipment_name)
VALUES ('2-Handed Kettlebell Swing', 'Two-Handed Russian-Style Kettlebell Swing', NULL, 'Abs', NULL, 'Kettlebell');