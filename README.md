<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Photography Studio Portfolio</title>
    <!-- Link to Google Fonts for Elephant font -->
    <link href="https://fonts.googleapis.com/css2?family=Elephant&display=swap" rel="stylesheet">
    <!-- Link to Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="styles.css">
    <style>
        /* CSS styles here */

        /* Override default font stack with Elephant font for "Valentina Vannini" */
        h1 {
            font-family: 'Elephant', sans-serif;
            color: #fff; /* Change the color of the "Valentina Vannini" text */
        }

        /* Set font family to "Cascadia Mono Light" for the rest of the content */
        body, p, a, li {
            font-family: 'Cascadia Mono Light', monospace;
            color: #8F9779; /* Change the text color of the content */
        }

        /* Sidebar Navigation styles */
        .sidebar {
            position: fixed;
            left: 0;
            top: 0;
            width: 200px;
            height: 100%;
            background-color: #8F9779; /* Change the background color of the sidebar to sage green */
            padding-top: 20px;
            overflow-y: auto; /* Add overflow-y to allow scrolling if the sidebar is too long */
        }

        .sidebar ul {
            padding: 0;
            margin: 0;
        }

        .sidebar ul li {
            list-style: none;
            margin-bottom: 10px;
        }

        .sidebar ul li a {
            display: block;
            color: #fff; /* Change the text color of the sidebar to white */
            text-decoration: none;
            padding: 10px;
            transition: background-color 0.3s;
        }

        .sidebar ul li a:hover {
            background-color: #AABD8C; /* Change the background color on hover to a slightly darker sage green */
        }

        /* Content styles */
        .content {
            padding: 20px;
            background-color: #fff; /* Change the background to white */
        }

        /* Add the text-sage class for sage green color */
        .text-sage {
            color: #8F9779;
        }

        /* Style for the slideshow */
        .slideshow img {
            width: 100%; /* Make images fill the container width */
            display: none; /* Hide all images by default */
        }

        /* Style for the active image in the slideshow */
        .slideshow img.active {
            display: block; /* Show only the active image */
        }

        /* Style for portfolio images */
        .gallery img {
            width: 100%;
            height: auto;
            margin-bottom: 20px; /* Add space below the images */
        }
    </style>
</head>
<body>

    <!-- Sidebar Navigation -->
    <nav class="sidebar">
        <ul class="nav flex-column">
            <li class="nav-item"><a href="#home" class="nav-link">Home</a></li>
            <li class="nav-item"><a href="#portfolio" class="nav-link">Portfolio</a></li>
            <li class="nav-item"><a href="#about" class="nav-link">About Us</a></li>
            <li class="nav-item"><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
    </nav>

    <!-- Content -->
    <div class="content bg-white">
        <!-- Header -->
        <header id="header">
            <div class="container">
                <h1 class="font-elephant text-sage">Valentina Vannini ph</h1>
                <p class="text-sage">Student at SpazioLabo Photography School, I am an artistic photographer and videomaker. My projects capture ideas and feelings that cannot be described in words, giving voice to our inner and most intimate sensations.</p>
            </div>
        </header>

        <!-- Hero Section -->
        <section id="home">
            <div class="container">
                <div class="slideshow">
                    <img src="https://i.imgur.com/2esFcK6.jpeg" alt="Image 1" class="active">
                    <img src="image2.jpg" alt="Image 2">
                    <img src="image3.jpg" alt="Image 3">
                    <img src="image4.jpg" alt="Image 4">
                </div>
            </div>
        </section>

        <!-- Portfolio Section -->
        <section id="portfolio" style="display: none;">
            <div class="container">
                <h2>Portfolio</h2>
                <!-- Gallery of high-quality images categorically -->
                <div class="gallery row">
                    <div class="col-sm-6 col-md-4">
                        <img src="https://i.imgur.com/2esFcK6.jpeg" alt="Portfolio Image 1">
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <img src="https://imgur.com/1xlAyHc.jpeg" alt="Portfolio Image 2">
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <img src="https://imgur.com/vnmbRe4" alt="Portfolio Image 3">
                    </div>
                </div>
            </div>
        </section>

        <!-- About Us Section -->
        <section id="about" style="display: none;">
            <div class="container">
                <h2>About Us</h2>
                <p class="text-sage">Information about the studio, its photographers, and their creative approach.</p>
            </div>
        </section>

        <!-- Contact Form -->
        <section id="contact" style="display: none;">
            <div class="container">
                <h2>Contact Us</h2>
                <form action="submit_form.php" method="post">
                    <input type="text" name="name" placeholder="Your Name" required>
                    <input type="email" name="email" placeholder="Your Email" required>
                    <input type="text" name="subject" placeholder="Subject" required>
                    <textarea name="message" placeholder="Your Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
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

            function startSlideshow() {
                showSlide(0);
                slideshowInterval = setInterval(showNextSlide, 3000);
            }

            function stopSlideshow() {
                clearInterval(slideshowInterval);
            }

            startSlideshow();

            const links = document.querySelectorAll('.nav-link');
            links.forEach(link => {
                link.addEventListener('click', function(event) {
                    event.preventDefault();
                    const targetId = this.getAttribute('href').substring(1);
                    const targetSection = document.getElementById(targetId);

                    targetSection.scrollIntoView({ behavior: 'smooth' });

                    const sections = document.querySelectorAll('section');
                    sections.forEach(section => {
                        section.style.display = 'none';
                    });

                    targetSection.style.display = 'block';

                    if (targetId !== 'home') {
                        stopSlideshow();
                    } else {
                        startSlideshow();
                    }
                });
            });
        });
    </script>
</body>
</html>
