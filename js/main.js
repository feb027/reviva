function showForm(formType) {
    const registerForm = document.getElementById('registerForm');
    const reportForm = document.getElementById('reportForm');
    
    if (formType === 'register') {
        registerForm.style.display = 'block';
        reportForm.style.display = 'none';
    } else {
        registerForm.style.display = 'none';
        reportForm.style.display = 'block';
    }
}

// Form submission handler
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Tambahkan logika submit form di sini
        alert('Terima kasih! Data Anda telah kami terima.');
        form.reset();
    });
});
