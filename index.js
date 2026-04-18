function toggleModal(type) {
    if (type === 'signup') {
        window.location.href = "Sign-up Page.html";
    } 
    else if (type === 'login') {
        window.location.href = "login page.html";
    } 
    else if (type === 'adopt') {
        window.location.href = "Adoption Form.html";
    } 
    else if (type === 'foster') {
        window.location.href = "Foster Form.html";
    }
}

// Logo interaction stays the same...


// Logo interaction
const logo = document.querySelector('.logo');
logo.addEventListener('mouseenter', () => {
    logo.style.transform = "scale(1.05) rotate(-2deg)";
    logo.style.transition = "0.3s";
});
logo.addEventListener('mouseleave', () => {
    logo.style.transform = "scale(1) rotate(0deg)";
});
