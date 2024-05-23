document.addEventListener('DOMContentLoaded', function () {
    let form = document.getElementById('contactForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() === true) {
            let successCard = document.querySelector('.card.success');
            successCard.style.display = 'block';
            form.reset();
            form.classList.remove('was-validated');
        } else {
            form.classList.add('was-validated');
        }
    }, false);
});