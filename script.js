document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-link');
    const slideshowImages = document.querySelectorAll('.slideshow img');
    let currentSlideIndex = 0;
    let slideshowInterval;

    function showSlide(index) {
        slideshowImages.forEach(img => img.classList.remove('active'));
        slideshowImages[index].classList.add('active');
        currentSlideIndex = index;
    }

    function showNextSlide() {
        let nextIndex = (currentSlideIndex + 1) % slideshowImages.length;
        showSlide(nextIndex);
    }

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            scrollToSection(targetSection);
            hideAllSections();
            targetSection.style.display = 'block';

            if (targetId === 'home') {
                showSlide(0);
                clearInterval(slideshowInterval);
                slideshowInterval = setInterval(showNextSlide, 3000);
            } else {
                clearInterval(slideshowInterval);
            }
        });
    });

    function scrollToSection(section) {
        window.scrollTo({
            behavior: 'smooth',
            top: section.offsetTop - 50
        });
    }

    function hideAllSections() {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.style.display = 'none';
        });
    }

    // Initial display of the first slide
    showSlide(0);

    // Restart slideshow when returning to home section
    const homeLink = document.querySelector('a[href="#home"]');
    homeLink.addEventListener('click', function() {
        showSlide(0);
        clearInterval(slideshowInterval);
        slideshowInterval = setInterval(showNextSlide, 3000);
    });
});
