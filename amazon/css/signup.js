const form = document.getElementById('form');
const username = document.getElementById('username');
const emailOrPhone = document.getElementById('email');
const password = document.getElementById('password');
// Event listener for form submission
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission
    validateInput();    // Call validation function
});

// Function to set error messages
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

// Function to set success
const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

// Function to check if input is a valid email
const isValidEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(String(input).toLowerCase());
};

// Function to check if input is a valid phone number
const isValidPhone = (input) => {
    const phoneRegex = /^\+?[0-9]{10}$/; // Allows optional "+" and 10-15 digits
    return phoneRegex.test(String(input));
};

// Function to validate input
const validateInput = () => {
    const inputValue = emailOrPhone.value.trim();
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }
    if (inputValue === '') {
        setError(emailOrPhone, 'Email or phone number is required');
    } else if (!isValidEmail(inputValue) && !isValidPhone(inputValue)) {
        setError(emailOrPhone, 'Provide a valid email or phone number');
    } else {
        setSuccess(emailOrPhone);
        console.log('Form submitted successfully');
    }
    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 6 ) {
        setError(password, 'Password must be at least 6 character.')
    } else {
        setSuccess(password);
    }
};