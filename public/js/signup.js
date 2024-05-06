const signupFormHandler = async (event) => {
    event.preventDefault();

    const firstName = document.querySelector('#FirstName-Signup').value.trim();
    const lastName = document.querySelector('#LastName-Signup').value.trim();
    const email = document.querySelector('#Email-Signup').value.trim();
    const password = document.querySelector('#Password-Signup').value.trim();

    if (firstName && lastName && email && password) {
        const response = await fetch('/signup', {
            method: 'POST',
            body: JSON.stringify({ first_name: firstName, last_name: lastName, email: email, password: password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            window.location.replace('/login'); //loginpage
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('.Form-Button')
    .addEventListener('click', signupFormHandler);