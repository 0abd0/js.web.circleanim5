// Get the canvas element and its context
const canvas = document.getElementById('circleCanvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Parameters for the circle pattern
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const numCircles = 150;
const minRadius = Math.min(canvas.width, canvas.height) / 4;
const maxRadius = Math.min(canvas.width, canvas.height) / 3;
const minCircleSize = 1;
const maxCircleSize = 4;
const colors = ['#FFFFFF', '#008000', '#000000','#FF0000'];

// Image in the center
const centerImage = new Image();
centerImage.src = 'C:/Users/ /Downloads/323.png'; // Replace with the correct image path

// Get the speed control slider
const speedControl = document.getElementById('speedControl');

// Animation speed
let speed = speedControl.value;

// Update the speed based on slider input
speedControl.addEventListener('input', function() {
    speed = speedControl.value;
});

// Function to draw the circle pattern
function drawCirclePattern() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas for each frame

    // Draw circles
    for (let i = 0; i < numCircles; i++) {
        const angle = (i / numCircles) * 2 * Math.PI;
        const distanceFromCenter = Math.random() * (maxRadius - minRadius) + minRadius;
        const x = centerX + distanceFromCenter * Math.cos(angle);
        const y = centerY + distanceFromCenter * Math.sin(angle);
        const circleSize = Math.random() * (maxCircleSize - minCircleSize) + minCircleSize;
        const color = colors[Math.floor(Math.random() * colors.length)];
        ctx.beginPath();
        ctx.arc(x, y, circleSize, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
    }

    // Draw the image at the center
    const imgSize = 400; // Size of the image
    ctx.drawImage(centerImage, centerX - imgSize / 2, centerY - imgSize / 2, imgSize, imgSize);
}

// Function to animate the circles
function animateCircles() {
    drawCirclePattern();
    setTimeout(() => {
        requestAnimationFrame(animateCircles);
    }, 1000 / speed);
}

// Start the animation
animateCircles();

// Navigate to the next page on button click
document.getElementById('nextPageButton').addEventListener('click', () => {
    window.location.href = 'nextpage.html'; // Replace with the correct URL for the next page
});
