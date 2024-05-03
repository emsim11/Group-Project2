const loginFormHandler = async (event) => {
    event.preventDefault();
    
    // Collects values from the login form
    const email = document.querySelector('#Email-Login').value.trim();
    const password = document.querySelector('#Password-Login').value.trim();
    console.log(email);
    
    if (email && password) {
        const response = await fetch('/login', {
            method: 'POST',
            body: JSON.stringify({ email: email, password: password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            window.location.replace('/homepage');
        } else {
            console.log(response);
            alert(response.statusText);
        }
    }
};

document
    .querySelector('.Form-Button')
    .addEventListener('click', loginFormHandler);