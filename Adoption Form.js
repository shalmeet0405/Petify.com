JAVA:document.getElementById('adoptionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('fullName').value;
    alert(`🐾 Application Received! Thank you, ${name}. We'll reach out soon to discuss your match!`);
    this.reset();
});