document.getElementById('forgotPasswordForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const btn = document.querySelector('.glow-btn');
    const email = document.getElementById('recoveryEmail').value;

    // Visual feedback
    btn.innerHTML = "Sending a search party... 🐕‍🦺";
    btn.style.opacity = "0.7";
    btn.style.pointerEvents = "none";

    setTimeout(() => {
        // Success state
        btn.innerHTML = "Link Sent! 📧";
        btn.style.background = "#00b894";
        btn.style.opacity = "1";
        
        alert(`A recovery link has been sent to ${email}. Check your inbox (and your spam folder)!`);
        
        // Optional: Redirect back to login after success
        // window.location.href = "login.html";
    }, 2000);
});
