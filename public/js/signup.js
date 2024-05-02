const signupFormHandler = async (event) => {
    event.preventDefault();

    const firstName = document.querySelector('#FirstName-Signup').value.trim();
    const lastName = document.querySelector('#LastName-Signup').value.trim();
    const email = document.querySelector('#Email-Signup').value.trim();
    const password = document.querySelector('#Password-Signup').value.trim();

    if (firstName && lastName && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ firstName, lastName, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/homepage');
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('.Signup-Form')
    .addEventListener('submit', signupFormHandler);