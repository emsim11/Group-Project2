const { json } = require("sequelize");


const signupFormHandler = async (event) => {
    event.preventDefault();
    
    const firstName = document.querySelector('#FirstName-Signup').value.trim();
    const lastName = document.querySelector('#LastName-Signup').value.trim();
    const email = document.querySelector('#Email-Signup').value.trim();
    const password = document.querySelector('#Password-Signup').value.trim();
    const SignupBtn = document.getElementById('Submit-User-Button');

    if (firstName && lastName && email && password) {
        const response = await fetch('/signup', {
            method: 'POST',
            body: JSON.stringify({ first_name: firstName, last_name: lastName, email: email, password: password }),
            headers: { 'Content-Type': 'application/json' },
        });

        const responseData = await response.json();

        if (response.ok) {
            window.location.replace('/loginpage');
        } else {
            if (responseData.error === 'User already exists') {
                alert('User Already Exists');
            } else {
                alert('Error Creating User');
            }
        }
    };

    SignupBtn.addEventListener('click', )
};

document
    .querySelector('.Form-Button')
    .addEventListener('click', signupFormHandler);