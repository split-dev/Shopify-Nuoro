document.addEventListener('DOMContentLoaded', () => {
    (() => {
        document.addEventListener('scroll', () => {
            const stickySection = document.querySelector('.sticky-section');
            const targetSection = document.querySelector('.sticky-section__trigger');
            const footer = document.querySelector('footer');

            const targetPosition = targetSection.getBoundingClientRect().bottom;
            const footerPosition = footer.getBoundingClientRect().top;

            if (targetPosition <= window.innerHeight && footerPosition > window.innerHeight) {
                stickySection.classList.remove('d-none');
            } else {
                stickySection.classList.add('d-none');
            }
        });
    })();
});