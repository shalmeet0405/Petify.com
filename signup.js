document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const pass = document.getElementById('password').value;
    const confirm = document.getElementById('confirmPassword').value;
    const btn = document.querySelector('.glow-btn');

    if (pass !== confirm) {
        alert("Wait! The passwords don't match. 🐾");
        return;
    }

    // Creative effect: change button text on success
    btn.innerHTML = "Success! ✨";
    btn.style.background = "#00b894";
    
    setTimeout(() => {
        alert("Welcome to Petify! Your account has been created.");
        // window.location.href = "login.html";
    }, 500);
});