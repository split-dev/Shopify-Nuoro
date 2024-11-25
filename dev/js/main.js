document.addEventListener('DOMContentLoaded', () => {
    (() => {
        document.getElementById('add-to-checkout-form').addEventListener('submit', function (event) {
            event.preventDefault();

            fetch('/cart/add.js', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(new FormData(this)),
            })
                .then((response) => response.json())
                .then((data) => {
                    window.location.href = '/checkout';
                })
                .catch((error) => console.error('Error:', error));
        });

    })();
    (() => {
        document.addEventListener('scroll', () => {
            const stickySection = document.querySelector('.sticky-section');
            const targetSection = document.querySelector('.sticky-section__trigger');
            const footer = document.querySelector('footer');
            
            const targetPosition = targetSection.getBoundingClientRect().bottom;
            const footerPosition = footer.getBoundingClientRect().top;
            if (targetPosition <= 0 && footerPosition > window.innerHeight) {
                stickySection.classList.remove('d-none');
            } else {
                stickySection.classList.add('d-none');
            }
        });
    })();


});