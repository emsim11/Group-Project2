<div align="center">

<a href="./assets/images/icons/Fitness-Icon.svg"><img src="./assets/images/icons/Fitness-Icon.svg" alt="Application Logo" width="250"></a>

# Workout Tracker 2.0

<h3>Description</h3>

[![Deployed URL Badge](https://img.shields.io/badge/-Workout_Tracker_2.0-purple?style=flat-square&logo=GoogleChrome&logoColor=FFFFFF&labelColor=3A3B3C&color=E0ADF7&link=https://workout-tracker-3b0i.onrender.com)](https://workout-tracker-3b0i.onrender.com)

<p>
<a href="#description">Description</a> • 
<a href="#features">Features</a> • 
<a href="#installation">Installation</a> • 
<a href="#usage">Usage</a> • 
<a href="#testing">Testing</a> • 
<a href="#support">Support</a> • 
<a href="#contributing">Contributing</a> • 
<a href="#credits">Credits</a> • 
<a href="#license">License</a> </p>

</div>

## Description

The Workout Tracker is a web-based application designed to help users plan, track, and manage their workout routines effectively. Whether you're a fitness enthusiast or just starting on your fitness journey, this application provides a user-friendly interface to streamline your workout planning process.

Motivation

Why We Built This Project

How Will Someone Use the Project? What Challenges did We Overcome During Dev Process?

[Back to Top](#workout-tracker-20)

### User Story

```md
As a dedicated fitness enthusiast

I want an effective workout planner and progress tool

So that I can maintain a well-organized fitness regime, closely monitor my progress, and stay motivated to consistently prioritize my health
```

### Acceptance Criteria

```md
Given a Workout Tracker website

When the user visits the website

Then the login page will display and they can enter their login information to use the application

When the user clicks on `Create your Account`

Then they are taken to the sign-up page, where they can enter their First Name, Last Name, Email, and Password for their new account

When the user clicks `Register` after entering their criteria on the sign-up page

Then they are taken to the login page

When the user has successfully logged into their account

Then the homepage will display their first name, an inspiration quote, the current date and time, and an interactive calendar

When the user clicks on a date in the calendar

Then the workout planner page will display 

When the user clicks on the `Choose an Exercise Category` button

Then a list of categories is displayed using our Workout API database's Category table

When the user clicks on the `Start Workout` button on the workout planner page

Then they are taken to the workout page, which features a timer and a textbox where the user can ask Google Gemini AI whatever they want

When the user clicks on the `Search` button next to the AI entry textbox

Then the AI responds to their question with helpful information

When the user clicks on the `Return Home` or `Back to Calendar` buttons

Then the website will display the homepage again
```

[Back to Top](#workout-tracker-20)

## Features

- User Authentication: Secure login system to ensure only authorized users can access their workout data.
- Workout Selection: Choose from a variety of workout types, including arms, legs, upper body, back, shoulders, abs, cardio, and rest day.
- Workout Planner: Dynamically generates personalized workout plans based on user preferences and fitness goals-
- Calendar Integration: Schedule workouts conveniently using the built-in calendar view and track progress over-time.
- Responsive Design: Optimized for various devices, ensuring seamless user experience across desktop, tablet, a-d mobile platforms.
- Timer Functionality: Track workout duration with an integrated timer to optimize training sessions-
- Customizable: Easily customize workout plans and exercises to fit individual needs and preferences-

[Back to Top](#workout-tracker-20)

## Installation

Installation Steps and Dependencies

### Technologies
- HTML, CSS: Frontend development for creating a visually appealing and responsive user interface.
- JavaScript (jQuery): Backend functionality and dynamic content generation.
- Bootstrap: Frontend framework for styling and layout components.
- Day.js: Lightweight JavaScript date library for handling date and time calculations.
- WGER API: Used for loading exercise list in Exercise Type Container
- Quotable API: Used for loading random quotes on webpage

[Back to Top](#workout-tracker-20)

## Usage

1. Type the name you wish to use into the 'First Name' box to access the workout tracker.
2. A random quote is then generated using the Quotable API and placed below the header of the Webpage.
3. Press the 'Choose an Exercise Type' button, at which time a list of muscle groups will appear.
4. Select workout from the displayed choices.
5. The calendar is functional and can display previous months, days, and years as well as highlight past days in red, future days in grey, and the current day in green.
6. After selecting one of the displayed muscle groups another list will appear using the WGER API where the user can select specific workouts to complete.
7. Customize your workout plan based on your preferences and goals.
8. Press 'Begin Workout' button at the bottom of the container.
9. Monitor your progress by placing your time & number of reps in the box and adjust your workouts accordingly to achieve your fitness goals effectively.

Instructions and Examples for User

### Visuals

Below is an image of the login page, which is the landing page for users when they visit the website:

![Workout Tracker Login Page](./assets/images/demos/Login-Page.png)


![Workout Tracker Home Page](assets/images/WorkoutTracker2.png)
![Workout Tracker Page With Exercise Choices](assets/images/WorkoutTracker3.png)
![Workout Tracker Page With Exercise Checkbox List](assets/images/WorkoutTracker4.png)
![Wokrout Planner Page With Selected Exercises & Timer](assets/images/WorkoutTracker5.png)

This is the landing page for users who have visited before and have submitted their first name:
![Landing Page For Returning Visitors](assets/images/WorkoutTracker2.png)

Visuals and Screenshots

[Back to Top](#workout-tracker-20)

## Testing

Tests to Run for Project, Commands to Run Tests, Examples of How to Run Tests

[Back to Top](#workout-tracker-20)

## Support

 [![Email Badge](https://img.shields.io/badge/-Gmail-green?style=flat-square&logo=gmail&logoColor=FFFFFF&labelColor=3A3B3C&color=62F1CD)](mailto:emsimone11@gmail.com) 

If you have any questions, or additional feedback, please feel free to contact me. I will get back to you as soon as possible.

*Contact Information:*

GitHub: [emsim11](https://github.com/emsim11)

Email: emsimone11@gmail.com

*Submit an Issue:*

If you are experiencing an issue with this application, please submit an [issue ticket](https://github.com/emsim11/Group-Project2/issues).

[Back to Top](#workout-tracker-20)

## Contributing

![GitHub Repository Contributors Badge](https://img.shields.io/github/contributors/Emsim11/Group-Project2?label=Contributors&labelColor=3A3B3C&logo=GitHub&color=F89880)

This project is not allowing other contributors at this moment.

[Back to Top](#workday-scheduler)

### Roadmap

Project Roadmap

### Project Status

Current Status

[Back to Top](#workout-tracker-20)

## Credits

Here are listed the sources that helped make this project possible.

### Authors

*The following developers helped create this project:*

- [Emily Simone](https://github.com/emsim11)
- [Paul Ruszkay](https://github.com/PaulRusz)
- [Andrew Zubac](https://github.com/kitasauce)
- [Tania Bezerra](https://github.com/nybrasil)

### Acknowledgments

[Back to Top](#workout-tracker-20)

## License

[![MIT License Badge](https://img.shields.io/badge/License-MIT-pink?labelColor=3A3B3C&color=F778A1&link=https%3A%2F%2Fchoosealicense.com%2Flicenses%2Fmit%2F)](https://choosealicense.com/licenses/mit/)

&copy; 2024 Emily Simone, Paul Ruszkay, Andrew Zubac, Tania Bezerra

This application is licensed under the [MIT License](./LICENSE).