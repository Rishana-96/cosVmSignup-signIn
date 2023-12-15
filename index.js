document.getElementById('signup-username').value = 'Rishana';
document.getElementById('signup-email').value = 'rishana@gmail.com';
document.getElementById('signup-password').value = '12345678';


function toggleForm(formId) {
    document.getElementById('signup').style.display = (formId === 'signup') ? 'block' : 'none';
    document.getElementById('signin').style.display = (formId === 'signin') ? 'block' : 'none';

}
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function validatePassword(password) {
    return password.length >= 8;
}
function signUp() {
    const defaultUsername = 'Rishana';
    const defaultEmail = 'rishana@gmail.com';
    const defaultPassword = '12345678';

    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (!username || !email || !password) {
        alert('Please fill all the fields');
        return;
    }

    if (username !== defaultUsername || email !== defaultEmail || password !== defaultPassword) {
        alert('Invalid username or password');
        return;
    }
    if (!validateEmail(email)) {
        alert('Invalid email format');
        return;
    }

    if (!validatePassword(password)) {
        alert('Password must be at least 8 characters long');
        return;
    }

    alert(`Sign Up successful!\nUsername: ${username}\nEmail: ${email}\nPassword: ${password}`);
    toggleForm('signin')
}
function signIn() {
    const defaultUsername = 'rishana';
    const defaultPassword = '12345678';

    const username = document.getElementById('signin-username').value.toLowerCase();
    const password = document.getElementById('signin-password').value;


    if (!username || !password) {
        alert('Please fill all the fields');
        return;
    }
    if (username.toLowerCase() !== defaultUsername || password !== defaultPassword) {
        alert('Username and password do not match');
        return;
    }



    alert(`Sign In successful!\nUsername: ${username}\nPassword: ${password}`);
    window.location.href = 'home.html';
}
