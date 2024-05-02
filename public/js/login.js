const loginFormHandler = async (event) => {
    event.preventDefault();
    
    // Collects values from the login form
    const email = document.querySelector('#Email-Login').value.trim();
    const password = document.querySelector('#Password-Login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
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
    .querySelector('.Form-Button')
    .addEventListener('submit', loginFormHandler);