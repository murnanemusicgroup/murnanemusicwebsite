document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const sidebar = document.getElementById('sidebar');
    const slideshowContainer = document.querySelector('.slideshow-container');
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    // --- Sidebar Toggle ---
    hamburgerMenu.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        hamburgerMenu.classList.toggle('open'); // Toggles the 'X' animation
    });

    // --- Slideshow Functionality ---
    function showSlide(index) {
        // Remove 'active' from all slides
        slides.forEach(slide => slide.classList.remove('active'));

        // Add 'active' to the current slide
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Initialize the first slide
    if (slides.length > 0) {
        showSlide(currentSlide);
        // Start slideshow interval (e.g., every 5 seconds)
        setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }
});
