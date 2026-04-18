document.getElementById('fosterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('fullName').value;
    alert(`🏠 Thank you, ${name}! Your foster application has been received. Our team will review your home details and contact you for a virtual walkthrough shortly.`);
    this.reset();
});