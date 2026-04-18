document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const btn = document.querySelector('.glow-btn');
    const email = document.getElementById('email').value;

    // Visual feedback: change button state
    btn.innerHTML = "Sniffing credentials... 🐶";
    btn.style.opacity = "0.7";
    btn.style.pointerEvents = "none";

    setTimeout(() => {
        // Simple mock success
        btn.innerHTML = "Success! ✨";
        btn.style.background = "#00b894";
        btn.style.opacity = "1";
        
        alert(Welcome back, ${email.split('@')[0]}! Redirecting to your pet dashboard.);
        // window.location.href = "dashboard.html";
    }, 1500);
});