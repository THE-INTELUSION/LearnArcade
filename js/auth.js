// auth.js
document.addEventListener('DOMContentLoaded', () => {
    // Form Elements
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const passwordInput = document.getElementById('password');
    const roleSpecificFields = document.getElementById('roleSpecificFields');

    // Toggle Password Visibility
    document.querySelectorAll('.toggle-password').forEach(button => {
        button.addEventListener('click', () => {
            const input = button.parentElement.querySelector('input');
            const icon = button.querySelector('i');
            
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    });

    // Password Strength Checker
    if (passwordInput) {
        passwordInput.addEventListener('input', checkPasswordStrength);
    }

    // Role-specific fields for signup
    if (signupForm) {
        const roleInputs = signupForm.querySelectorAll('input[name="role"]');
        roleInputs.forEach(input => {
            input.addEventListener('change', () => updateRoleFields(input.value));
        });
        // Initialize with default role
        updateRoleFields('student');
    }

    // Form Submissions
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }
});

// Password Strength Checker
function checkPasswordStrength(event) {
    const password = event.target.value;
    const strengthBar = document.querySelector('.strength-bar');
    const strengthText = document.querySelector('.strength-text');
    
    let strength = 0;
    let status = '';

    if (password.match(/[a-z]+/)) strength += 1;
    if (password.match(/[A-Z]+/)) strength += 1;
    if (password.match(/[0-9]+/)) strength += 1;
    if (password.match(/[$@#&!]+/)) strength += 1;
    if (password.length >= 8) strength += 1;

    switch (strength) {
        case 0:
            strengthBar.style.width = '0%';
            strengthBar.style.background = '#ff4444';
            status = 'Very Weak';
            break;
        case 1:
            strengthBar.style.width = '20%';
            strengthBar.style.background = '#ff4444';
            status = 'Weak';
            break;
        case 2:
            strengthBar.style.width = '40%';
            strengthBar.style.background = '#ffbb33';
            status = 'Fair';
            break;
        case 3:
            strengthBar.style.width = '60%';
            strengthBar.style.background = '#ffbb33';
            status = 'Good';
            break;
        case 4:
            strengthBar.style.width = '80%';
            strengthBar.style.background = '#00C851';
            status = 'Strong';
            break;
        case 5:
            strengthBar.style.width = '100%';
            strengthBar.