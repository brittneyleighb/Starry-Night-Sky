const sky = document.querySelector('.sky');

// Generate random stars
function createStars() {
  const starCount = 300; // Number of stars
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    const size = Math.random() * 2 + 1; // Star size between 1px and 3px
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const delay = Math.random() * 5; // Random delay for twinkle

    // Set star styles
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.animationDelay = `${delay}s`;

    // Add star to the sky
    sky.appendChild(star);
  }
}

// Parallax effect on mouse movement
window.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth) * 50;
  const y = (e.clientY / window.innerHeight) * 50;
  sky.style.transform = `translate(${-x}px, ${-y}px)`;
});

// Initialize stars
createStars();
